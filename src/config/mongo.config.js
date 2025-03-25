import { config } from "dotenv";
import mongoose from "mongoose";

config();

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(`✅`);
  } catch (error) {
    console.log(`❌`);
    process.exit(1);
  }
};

export default connectDb;