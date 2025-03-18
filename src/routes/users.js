import express from "express";
import { userLogIn, userSignUp } from "../controllers/userControllers.js";
const router = express.Router();

router.get("/", userLogIn);

router.post("/", userSignUp);

export default router;
