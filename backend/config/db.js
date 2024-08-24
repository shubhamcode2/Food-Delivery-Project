import mongoose from "mongoose";
export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://shubhamsinghia160:MonAtlas39@cluster0.nvaystt.mongodb.net/minor-project-food').then(() => console.log("DB connected"));
}