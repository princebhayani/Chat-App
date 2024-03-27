import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cookieParser from "cookie-parser";


import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

import connectToMongoDB from "./db/connectToMongoDB.js";

const app = express();
app.use(express.json()); // to parse the incoming request with JSON payload(from req.body)
const PORT = process.env.PORT || 5000;
app.use(cookieParser());

// app.get("/", (req, res) => {
//   res.send("Hello World!!");
// });

app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);
app.use("/api/users", userRoutes);

app.listen(PORT, () => {
    connectToMongoDB();
  console.log(`server running on port ${PORT}!!`);
});
