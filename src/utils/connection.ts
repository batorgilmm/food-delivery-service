import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;
export const connection = async () => {
  console.log(process.env);
  await mongoose.connect(MONGODB_URI);
  console.log("Database connected");
};
