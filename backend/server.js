import cookieParser from "cookie-parser";
import { config } from "dotenv";
import express from "express";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

import connectToMongoDB from "./db/connectToMongoDB.js";

config();

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json()); // body parser
app.use(cookieParser());

app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes)

app.get("/", (_req, res) => {
  res.send("hello world")
})
app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server running on port ${PORT}`);
})
