import express from "express";
import router from "./routes/auth.route.js";
 import dotenv from "dotenv"
import  { connectDB }  from "./lib/db.js";
import cookieParser from "cookie-parser";
import messageRoutes from "./routes/message.route.js";

const app = express();

app.use(express.json());  //helps to extract the json data out of body
app.use(cookieParser())
dotenv.config();

app.use("/api/auth", router)
app.use("api/message", messageRoutes)

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log("Server is running on port: " + PORT)
    connectDB()
})