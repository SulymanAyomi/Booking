import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";
// routes middleware
import authRoute from "./routes/auth.js";
import userRoute from "./routes/users.js";
import roomsRoute from "./routes/rooms.js";
import hotelsRoute from "./routes/hotel.js";
import usersRoute from "./routes/users.js";

// configurations
const app = express();
app.use(morgan("dev"));
app.set("trust proxy", "loopback");
app.use(cors());
app.use(cookieParser());
dotenv.config();

const connect = async () => {
  try {
    mongoose.connect(process.env.DATABASE);
    console.log("connected to Database");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("database disconnected");
});
mongoose.connection.on("error", (err) => {
  console.log("Databse error", err);
});

// middleware
app.use(express.json());
// middleware routes
app.use("/api", hotelsRoute);
app.use("/api", authRoute);
app.use("/api", roomsRoute);
app.use("/api", usersRoute);

// error middleware
app.use((err, req, res, next) => {
  console.log(err);
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.listen(4001, () => {
  connect();
  console.log("connected");
});
