import r from "rethinkdb";
import bcrypt from "bcrypt";
import defaultCards from "../defaultCards.js";
import jwt from "jsonwebtoken";
import fs from "fs";

var connection = null;

const caCert = fs.readFileSync("./ca.cert");
r.connect(
    {
        host: "aws-us-east-1-portal.14.dblayer.com",
        port: "16824",
        password: process.env.PASSWORD, //process.env.PASSWORD,
        ssl: { ca: caCert },
    },
    function(err, conn) {
        if (err) throw err;
        connection = conn;
    }
);

export default {
    addUser: async (args) => {
        const hashedPassword = await bcrypt.hash(args.userInput.password, 12);
        const newUser = {
            email: args.userInput.email,
            password: hashedPassword,
            username: args.userInput.username,
            cards: defaultCards,
        };
        //console.log(newUser);
        try {
            //TODO: VERIFY UNIQUE EMAIL
            let newArray = [];
            const findUser = await r
                .table("users")
                .filter(r.row("email").eq(newUser.email))
                .run(connection);
            await findUser.toArray(function(err, result) {
                if (err) throw err;
                newArray = result;
            });
            if (newArray.length > 0) {
                throw new Error("duplicate email found!");
            }
            const result = await r
                .db("test")
                .table("users")
                .insert(newUser)
                .run(connection);
            const queryResults = await r
                .table("users")
                .get(result.generated_keys[0])
                .run(connection);
            return { ...queryResults, password: null };
        } catch (err) {
            //console.log(err);
            throw err;
        }
    },
    updateCards: async (args, req) => {
        if (!req.isAuth) {
            throw new Error("Unauthenticated!");
        }
        try {
            const queryResults = await r
                .table("users")
                .get(args.userId)
                .run(connection);
            queryResults.cards = args.cards;
            const replacementSuccess = await r
                .table("users")
                .get(args.userId)
                .replace(queryResults)
                .run(connection);
            //console.log(replacementSuccess);
            return queryResults;
        } catch (err) {
            //console.log(err);
            throw err;
        }
    },
    login: async (args) => {
        try {
            let newArray = [];
            const findUser = await r
                .table("users")
                .filter(r.row("email").eq(args.email))
                .run(connection);
            await findUser.toArray(function(err, result) {
                if (err) throw err;
                newArray = result;
            });
            const userFound = newArray[0];
            const isEqual = await bcrypt.compare(
                args.password,
                userFound.password
            );
            if (!isEqual) {
                throw new Error("Password is incorrect!");
            }
            const token = jwt.sign(
                { id: userFound.id, email: userFound.email },
                process.env.TOKEN_KEY, //TODO: Get better key
                {
                    expiresIn: "1d",
                }
            );
            //console.log(userFound);
            return {
                user: userFound,
                token: token,
                tokenExpiration: 1,
            };
        } catch (err) {
            //console.log(err);
            throw err;
        }
    },
    decodeToken: async (args, req) => {
        try {
            //console.log(req.isAuth);
            if (!req.isAuth) {
                throw new Error("Unauthenticated!");
            }
            const userFound = await r
                .table("users")
                .get(req.id)
                .run(connection);

            // console.log({
            //     user: userFound,
            //     token: args.token,
            //     tokenExpiration: 1,
            // });

            const newToken = jwt.sign(
                { id: userFound.id, email: userFound.email },
                process.env.TOKEN_KEY,
                {
                    expiresIn: "1d",
                }
            );

            return {
                user: userFound,
                token: newToken,
                tokenExpiration: 1,
            };
        } catch (err) {
            //console.log(err);
            throw err;
        }
    },
};
