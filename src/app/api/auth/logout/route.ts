import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest){
    const response = NextResponse.json({
        message: "Logged out successfully",
        success: true
    });
    response.cookies.set("token", "", {
        httpOnly: true,
        expires: Date.now()
    });

    return response;
}