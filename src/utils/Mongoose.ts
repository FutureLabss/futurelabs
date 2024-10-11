import mongoose from "mongoose";


const connectMongoDb = async () => {
  const { MONGODB_URI } = process.env;
  if (!MONGODB_URI) {
    throw new Error("Please define the MONGODB_URI environment variable inside .env.local");
  }
  if (mongoose.connections[0].readyState) {
    return mongoose.connections[0].readyState
  }

  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Connected to MongoDB");
  } catch (error) {

    console.error("Failed to connect to MongoDB", error);
  }
}

export default connectMongoDb