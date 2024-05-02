import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import mongoose from "mongoose";
import { router } from "./routes/authRoutes.js";


dotenv.config();
//database connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("database connected"))
  .catch((error) => console.error("Error connecting to database:", error.message));


const app = express();

app.use("/", router)




const port = 8000;
app.listen(port, (req, res) =>{
  console.log(`server is running at ${port}`)
});
