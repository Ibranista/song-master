import mongoose, { Connection } from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async (): Promise<void> => {
  try {
    const conn: typeof mongoose = await mongoose.connect(
      process.env.MONGO_URI as string
    );
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error: unknown) {
    console.log(error);
    process.exit(1);
  }
};

export default connectDB;
