import asyncHandler from "express-async-handler"
import jwt from "jsonwebtoken"
import { RequestHandler } from "express"

export const generateToken = (id: string): string => {
    return (jwt.sign(id, "12345", { expiresIn:  "30d"}));
}

export const protect: RequestHandler = asyncHandler(async (req, res, next) => {
    let token;

    if(req.cookies.token){
        token = req.cookies.token
    }else if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
        token = req.headers.authorization.split(" ")[1];
    }

    if(token){
        try {
            const jwtVerify = jwt.verify(token, "12345");
    
            //db call
            // const req.user = 
    
            // if(!req.user) {
            //     res.status(401);
            //         throw new Error('User not found');
            //     }

            next();
        } catch (error) {
            console.error(error);
            res.status(401);
            throw new Error('Not authorized, token failed');
        }
    }else{
        res.status(401);
        throw new Error('Not authorized, no token');
    }
})