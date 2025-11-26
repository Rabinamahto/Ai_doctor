import mongoose from "mongoose";

const connectDB = async () => {
  const uri = process.env.MONGO_URI;
  if (!uri) {
    console.warn('⚠️  MONGO_URI not set — skipping MongoDB connection (backend will still run).');
    return;
  }

  try {
    await mongoose.connect(uri);
    console.log("✅ MongoDB connected successfully");
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error.message);
    // Do not exit the process — allow the server to run without DB for local dev
  }
};

export default connectDB;
