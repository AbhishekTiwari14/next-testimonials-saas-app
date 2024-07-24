import UserModel from "@/app/models/User";
import { NextRequest, NextResponse } from "next/server";
import connectDb from "@/lib/connectDb";
import { getdatafromjwt } from "@/lib/getJwtToken";

export async function POST(request: NextRequest){

    await connectDb();

    const userId = await getdatafromjwt(request);

    const user = await UserModel.findOne({_id: userId}).select("-password"); //password ko chorr kar baki data de do
    console.log("route me user", user);
    if(!user){
        throw new Error("User not found");
    }
    return NextResponse.json({
        message: "user found",
        data: user
    })
}