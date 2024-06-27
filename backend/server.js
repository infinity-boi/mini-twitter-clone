import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";

import connectMongoDB from "./db/connectMongoDB.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// console.log(process.env.MONGO_URI);
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

// app.get("/testget", (req, res)=>{res.status(200).json({Request:"Received"})});
// app.post("/testpost", (req, res)=>{res.status(200).json({Response:"Received"})});

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

app.listen(PORT, () => {
    console.log(`Server is Runnig on port ${PORT}`);
    connectMongoDB();
})