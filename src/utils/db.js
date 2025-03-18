import { set, connect } from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const uri = process.env.DB_CONNECTION;

const mongoConnection = uri || "mongodb://127.0.0.1:27017";

set("strictQuery", true);

const connectDB = async () => {
  try {
    await connect(mongoConnection);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("No DB connection!", error);
    process.exit(1); //Exit process with failure
  }
};

export default connectDB;
