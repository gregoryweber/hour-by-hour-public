import jwt from "jsonwebtoken";

export default (req, res, next) => {
    const authHeader = req.get("Authorization");
    if (!authHeader) {
        req.isAuth = false;
        //console.log("Unauthenticated because no header");
        return next();
    }
    const token = authHeader.split(" ")[1];
    if (!token || token == "") {
        req.isAuth = false;
        //console.log("Unauthenticated because no token");
        return next();
    }
    let decodedToken;
    try {
        //console.log(token);
        decodedToken = jwt.verify(token, process.env.TOKEN_KEY); //process.env.TOKEN_KEY
    } catch (err) {
        //console.log("Unauthenticated because invalid token");
        req.isAuth = false;
        return next();
    }

    if (!decodedToken) {
        //console.log("Unauthenticated because token does not exist");
        req.isAuth = false;
        return next();
    }

    //console.log("Authenticated with valid token!");

    req.isAuth = true;
    req.id = decodedToken.id;
    next();
};
