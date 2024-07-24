import UserModel from "@/app/models/User";
import connectDb from "@/lib/connectDb";
import bcryptjs from "bcryptjs"
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken"

connectDb();

export async function POST(request: Request){
    const {username, email, password} = await request.json();
    const existingUsername = await UserModel.findOne({username});
    if(existingUsername){
        return Response.json({
            success: false,
            message: "username is already taken"
        }, { status: 400 })
    }
    const existingEmail = await UserModel.findOne({email});
    if(existingEmail){
        return Response.json({
            success: false,
            message: "Email is already registered, please sign in"
        }, { status: 400 })
    }
    const hashedPassword = await bcryptjs.hash(password, 10);
    const newUser = new UserModel({
        username,
        email,
        password: hashedPassword,
        plan: 'free',
        testimonials: []
    })
    await newUser.save();

    const tokenData = {
        id: newUser._id,
        email: newUser.email
    };

    const token = jwt.sign(tokenData, process.env.TOKEN_SECRET!, {expiresIn: '1d'});

    const response = NextResponse.json({
        message: "user created successfully",
        success: true
    })

    response.cookies.set("token", token, {
        httpOnly: true   //will make sure that user cannot modify token
    })

    return response; 
}