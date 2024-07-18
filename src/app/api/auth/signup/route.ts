import UserModel from "@/app/models/User";
import connectDb from "@/lib/connectDb";
import bcryptjs from "bcryptjs"


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

    return Response.json({
        success: true,
        message: "user created successfully" 
    }, {status: 200})
}