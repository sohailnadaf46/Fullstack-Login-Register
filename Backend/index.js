import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import { router } from "./routes/authRoutes.js";

const app = express();

app.use("/", router)




const port = 8000;
app.listen(port, (req, res) =>{
  console.log(`server is running at ${port}`)
});
