'use server'

import UserModel from "@/app/models/User"
import connectDb from "../connectDb";

export async function getTestimonials(username: string){
    try {
        await connectDb();
        const user= await UserModel.findOne({username});
        if(!user){
            return { success: false, message: "user not found" };
        }
        const updatedUser = await UserModel.aggregate([
            { $match: { username: username } },
            { $unwind: '$testimonials' },
            { $sort: { 'testimonials.createdAt' : -1 } },
            { $group: {_id: '$_id', testimonials: { $push: "$testimonials" }} }
        ]).exec()
        
        const data = JSON.parse(JSON.stringify(updatedUser));
        return { success: true, data: data[0] };

    } catch (error) {
        return { success: false, message: "interal server error", error };
    }
}