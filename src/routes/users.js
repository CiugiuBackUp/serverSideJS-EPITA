import { Router } from "express";
import { userLogIn, userSignUp } from "../controllers/userControllers.js";
import { verifyToken } from "../middleware/auth.js";
import upload from "../middleware/multerConfig.js";
const router = Router();

router.post("/login", userLogIn);

router.post("/signup", userSignUp);

router.put("/updateUser", verifyToken, upload.single("image"), (req, res) => {
  console.log(req.body);
  console.log(req.file);
  console.log(req.userId);
  res.json({ message: "User response reached" });
});
export default router;
