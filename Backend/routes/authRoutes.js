import express from "express"
import cors from "cors"
import { registerUser, test, loginUser } from "../controllers/auth.controller.js"

const router  = express.Router();

//middlewares
router.use(cors({
  credentials:true,
  origin:"http://localhost:5173"
}));
router.use(express.urlencoded({extended:true}));


//routes
router.get("/", test)
router.post("/register", registerUser)
router.post("/login", loginUser)

export { router }
