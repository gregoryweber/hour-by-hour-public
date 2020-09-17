import express from "express";
import expressGraphql from "express-graphql";

import schema from "./schema/schema.js";
import resolvers from "./resolvers/resolvers.js";

import isAuth from "./middleware/is-auth.js";

import path from "path";
import cluster from "cluster";
import os from "os";
import compression from "compression";
import helmet from "helmet";

const numCPUs = os.cpus().length;

const isDev = process.env.NODE_ENV !== "production";
const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

if (!isDev && cluster.isMaster) {
    console.error(`Node cluster master ${process.pid} is running`);

    // Fork workers.
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    cluster.on("exit", (worker, code, signal) => {
        console.error(
            `Node cluster worker ${worker.process.pid} exited: code ${code}, signal ${signal}`
        );
    });
} else {
    const app = express();

    app.use(
        helmet({
            contentSecurityPolicy: false,
        })
    );
    app.use(compression());

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.use((req, res, next) => {
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Methods", "POST,GET,OPTIONS");
        res.setHeader(
            "Access-Control-Allow-Headers",
            "Content-Type, Authorization"
        );
        // res.setHeader(
        //     "Content-Security-Policy",
        //     "default-src 'self' *.fontawesome.com"
        // );

        if (req.method === "OPTIONS") {
            return res.sendStatus(200);
        }
        next();
    });

    app.use(isAuth);

    app.use(express.static(path.resolve(__dirname, "./frontend/build")));

    app.use(
        "/graphql",
        expressGraphql.graphqlHTTP({
            schema: schema,
            rootValue: resolvers,
            graphiql: false,
        })
    );

    app.get("*", function(request, response) {
        response.sendFile(
            path.resolve(__dirname, "./frontend/build", "index.html")
        );
    });

    app.listen(PORT, function() {
        console.error(
            `Node ${
                isDev ? "dev server" : "cluster worker " + process.pid
            }: listening on port ${PORT}`
        );
    });
}
