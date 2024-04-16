import { verify } from "jsonwebtoken";
import asyncHandler from 'express-async-handler';
import { HTTP_UNAUTHORIZED } from "../constants/http_status";

export const auth = asyncHandler(async ( req:any,res:any,next:any)=>{
  
    const token = req.headers.access_token as string;
    if(!token) return res.status(HTTP_UNAUTHORIZED).send();
    try {
       
        const decodedUser = verify(token, process.env.JWT_SECRET!);
       
        req.user = decodedUser;
      
        next();
        
    } catch (error) {
        res.status(HTTP_UNAUTHORIZED).send("unanthorized username");
        
    }
   // console.log(next);
   // return next;

});