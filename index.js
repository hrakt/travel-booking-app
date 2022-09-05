import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("connected");
  } catch (err) {
    throw error;
  }
};

mongoose.connection.on("disconnect", () => {
  console.log("mongodb disconnected");
});

mongoose.connection.on("connect", () => {
  console.log("mongodb connected");
});

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(8800, () => {
  connect();
  console.log("connected to back");
});
