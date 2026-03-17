import asyncHandler from "express-async-handler"
import bcrypt from "bcrypt"
import { signinSchema } from "@repo/common-zod/types"

const signup = asyncHandler(async(req, res) => {
    try {
        const data = signinSchema.safeParse(req.body);
        if(!data.success){
            res.status(404);
            throw new Error("Schema Invalid");
        }
        const { username, password, name} = req.body;
        //db check user exist or not

        const hashPassword = await bcrypt.hash(password, 10);

        // create the user in the db 
        //return usser details and send successfull messaage and generate token
    } catch (error) {
        
    }
    
})

const signin = asyncHandler((req, res) => {
    try {
        const { username, password } = req.body;
        if(!username || !password){
            res.status(400).json({
                mssg: "Input is invalid"
            })
        }

        //db call
        //generate token
        //return "user successfull login"
    } catch (error) {
        
    }
})