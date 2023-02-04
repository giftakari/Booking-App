import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./backend-api/routes/auth.js";
import usersRoute from "./backend-api/routes/users.js";
import hotelsRoute from "./backend-api/routes/hotels.js";

const app = express();

dotenv.config();

const connect = async () => {
  mongoose.set("strictQuery", false);
  try {
    await mongoose.connect(process.env.MONGO, { useNewUrlParser: true });
    console.log("Connected to Mongo DB");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("connected", () => {
  console.log("Mongo Db connected");
});

mongoose.connection.on("disconnected", () => {
  console.log("Mongo Db disconnected");
});

// Middleware
app.use(express.json());
app.use("/auth", authRoute);
app.use("/hotels", hotelsRoute);
app.use("/users", usersRoute);

// Error handling
app.use((err, req, res, next) => {
  return res.sendStatus(500).json("Error in getting the requested route ");
});

app.get("/", (req, res) => {
  return res.json({ name: "Akaris", age: 56 });
});
app.get("/user", (req, res) => {});

app.listen(8800, () => {
  connect();
  console.log("App is running on port 8800");
});
