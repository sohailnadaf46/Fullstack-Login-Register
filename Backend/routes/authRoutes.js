import express from "express"
import cors from "cors"
import { test } from "../controllers/auth.controller.js"

const router  = express.Router();

//middlewares
router.use(cors({
  credentials:true,
  origin:"http://localhost:5173"
}));
router.use(express.urlencoded({extended:true}));

router.get("/", test)

export { router }
