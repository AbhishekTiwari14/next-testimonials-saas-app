import mongoose from "mongoose"

export interface Testimonial extends mongoose.Document{
    name: string;
    message: string;
    image: string; //cloudinary
    userId: string;
    createdAt: Date
}

const TestimonialSchema: mongoose.Schema<Testimonial> = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    image: {
        type: String, //cloudinary
        required: true,
    },
    // userId: { 
    //     type: mongoose.Schema.Types.ObjectId,
    //     required: true 
    // },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    }
})

export interface User extends mongoose.Document{
    username: string;
    email: string;
    password: string;
    // verifyCode: string;
    // verifyCodeExpiry: Date;
    // isVerified: boolean;
    plan: string;
    testimonials: Testimonial[];
}

const UserSchema: mongoose.Schema<User> = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    }
    ,email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        match: [/.+\@.+\..+/, 'Please use a valid email address']
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
    },
    // verifyCode: {
    //     type: String,
    //     required: [true, 'Verify Code is required'],
    // },
    // verifyCodeExpiry: {
    //     type: Date,
    //     required: [true, 'Verify Code Expiry is required'],
    // },
    // isVerified: {
    //     type: Boolean,
    //     default: false,
    // },
    plan: { 
        type: String, 
        enum: ['free', 'basic', 'pro'],
        default: 'free'
    },
    testimonials: [TestimonialSchema]
})

const UserModel = (mongoose.models.User as mongoose.Model<User>) || mongoose.model<User>('User', UserSchema);

export default UserModel;