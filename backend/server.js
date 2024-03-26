import express from "express";
import dotenv from "dotenv";
dotenv.config();

import authRoutes from "./routes/auth.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";

const app = express();
app.use(express.json()); // to parse the incoming request with JSON payload(from req.body)
const PORT = process.env.PORT || 5000;

// app.get("/", (req, res) => {
//   res.send("Hello World!!");
// });

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
    connectToMongoDB();
  console.log(`server running on port ${PORT}!!`);
});
