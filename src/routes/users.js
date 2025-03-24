import { Router } from "express";
import { userLogIn, userSignUp } from "../controllers/userControllers.js";
const router = Router();

router.get("/login", userLogIn);

router.post("/signup", userSignUp);

export default router;
