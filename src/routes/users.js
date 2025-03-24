import { Router } from "express";
import { userLogIn, userSignUp } from "../controllers/userControllers.js";
import { verifyToken } from "../middleware/auth.js";
const router = Router();

router.post("/login", userLogIn);

router.post("/signup", userSignUp);

router.post("/test", verifyToken, (req, res) => {
  res.send("test");
});
export default router;
