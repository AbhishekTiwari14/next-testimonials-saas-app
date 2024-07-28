import UserModel from "@/app/models/User";
import connectDb from "@/lib/connectDb";

export async function GET(request: Request){
    
    const { searchParams } = new URL(request.url);
    const queryParams = {
        username: searchParams.get('username'),
    };

    const {username} = queryParams;
    console.log("username: ", username)

    await connectDb();
    try {
        const response = await UserModel.findOne({username});
        console.log("response: ", response)
        return Response.json({
            message: "Testimonials found",
            data: response?.testimonials
        })
    } catch (error) {
        return Response.json({
            status: fail,
            message: "Unexpeeected error", error
        }, {status: 501})
        
    }
}