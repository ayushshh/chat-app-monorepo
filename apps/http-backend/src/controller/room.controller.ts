import { RequestHandler } from "express";
import asyncHandler from "express-async-handler";
import { protect } from "../middleware.js";

export const createRoom : RequestHandler = asyncHandler(async (req, res) => {
    const id = req.body;
    if(!id){
        res.status(404)
        .json({
            mssg: "input is invalid"
        })
        throw new Error;
    }

    //db call
    //creae room
    const room = Math.floor(Math.random() * 5000) + 1;
    //lastly save room address to the  user table 
})