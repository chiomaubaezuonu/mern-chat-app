import express from "express";
import router from "./routes/auth.route.js";
 import dotenv from "dotenv"

const app = express();
dotenv.config();

app.use("/api/auth", router)
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log("Server is running on port: " + PORT)
})