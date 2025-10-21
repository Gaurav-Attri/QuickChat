import mongoose from 'mongoose';

export const connectDB = async () => {
    try{
        mongoose.connection.on("connected", () => console.log("MongoDB connected"));
        await mongoose.connect(`${process.env.MONGO_URI}quick_chat`)
    } 
    catch(error){
        console.error(error);
    }
}