import UserModel from "@/app/models/User";
import connectDb from "@/lib/connectDb";
import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken"
import { NextResponse } from "next/server";

connectDb()

export async function POST(request: Request){
    const {email, password} = await request.json();
    const user = await UserModel.findOne({email});
    if(!user){
        console.log("Email Id is not registered");
        return Response.json({
            success: false,
            message: "Email Id is not registered"
        }, {status: 400})
    }
    
    const correctPassword = await bcryptjs.compare(password, user.password);
    if(!correctPassword){
        console.log("Incorect Password!!");
        return Response.json({
            success: false,
            message: "Incorect Password!!"
        }, {status: 400})
    }
    try {
        // creating & storing JWT in browesr cookie
        const tokenData = {
            id: user._id,
            email: user.email
        };

        const token = jwt.sign(tokenData, process.env.TOKEN_SECRET!, {expiresIn: '1d'});

        const response = NextResponse.json({
            message: "Logged in successfully",
            success: true
        })

        response.cookies.set("token", token, {
            httpOnly: true   //will make sure that user cannot modify token
        })

        return response;
    }
    catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}

