import { config } from "dotenv";
import mongoose from "mongoose";

config();

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(`Success ✅`);
  } catch (error) {
    console.log(error.message)
    console.log(`Error ❌`);
    process.exit(1);
  }
};

export default connectDb;