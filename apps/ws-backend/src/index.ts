import { WebSocketServer } from "ws";
import dotenv from "dotenv";
import jwt, { JwtPayload } from "jsonwebtoken";

dotenv.config({
    path: "../../../.env"
})
const secret = process.env.JWT_SECRET;
if(!secret){
    throw new Error("Error while connecting to the server");
}

//ex-token : ws://localhost:3000?token=123123
const wss = new WebSocketServer({port:8080});

wss.on("connection", (ws, request) => {
    const url = request.url;
    if(!url){
        throw new Error("url is not provided") 
    }

    const queryParams = new URLSearchParams(url.split("?")[1]);
    const token = queryParams.get("token");
    if(!token){
        throw new Error("Token required");
    }
    const decoded = jwt.verify(token, secret);

    if(typeof decoded !== "object" || !decoded.userId){ //can explicitly give the decode as Jwtplayload that the decoded will contain Jwtplayload
        wss.close();
        throw new Error("Invalid JWT")
    }
    //db call

    ws.on("message" ,(data) => {
        ws.send("pong")
    })
})