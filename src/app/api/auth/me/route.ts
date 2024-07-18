import UserModel from "@/app/models/User";
import { getjwtdata } from "@/lib/getDataFromJWT"
import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest){
    const userId = getjwtdata(request);
    const user = await UserModel.findOne({_id: userId}).select("-password"); //password ko chorr kar baki data de do
    if(!user){
        throw new Error("User not found");
    }
    return NextResponse.json({
        message: "user found",
        data: user
    })
}