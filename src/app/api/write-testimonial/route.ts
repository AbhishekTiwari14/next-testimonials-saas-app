import connectDb from "@/lib/connectDb";
import UserModel, { Testimonial } from "@/app/models/User";

// //middleware
// export async function GET(request: Request){
//     await connectDb();

//     try {
//         const { searchParams } = new URL(request.url);
//         const queryParams = {
//             username: searchParams.get('username'),
//         };

//         const {username} = queryParams;
//         const existingUser  = await UserModel.findOne({username});
//         if(!existingUser){
//             return Response.json({
//                 success: false,
//                 message: "Invalid query parameters"
//             }, {status: 400});
//         }
//         return Response.json({
//             success: true,
//             message: "existing user matched"
//         }, {status: 201});

//     } catch (error) {
//         console.error('Error matching username:', error);
//         return Response.json({
//             success: false,
//             message: 'Error matching username',
//         },{ status: 500 });
//     }
// }

export async function POST(request: Request){
    await connectDb();

    try {
        // const { searchParams } = new URL(request.url);
        // const queryParams = {
        //     username: searchParams.get('username'),
        // };
        const {username, name, image, message} = await request.json();
        console.log(username);
        const user = await UserModel.findOne({ username });
        if (!user) {
            return Response.json(
                { message: 'Username not matching', success: false },
                { status: 404 }
            );
        }
    
        const newTestimonial = {name, message, image, createdAt: new Date()};
        user.testimonials.push(newTestimonial as Testimonial);
        await user.save();

        return Response.json(
            { message: 'Testimonial Created Successfully', success: true },
            { status: 201 }
          );

    } catch (error) {
        console.error('Error adding testimonial:', error);
        return Response.json(
            { message: 'Internal server error', success: false }, 
            { status: 500 }
        );
    }
}