import express from "express";
import hashPassword from "../middleware/passencrypt.js";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Users page");
});

router.post("/", hashPassword, (req, res) => {
  // const firstname = req.body.firstName;
  // const email = req.body.email;
  // const password = req.body.password;
  const { firstName, email } = req.body;
  const hashedPassword = req.hashPassword;
  res.json({ firstName, email, hashedPassword, _id: "randomId" });
  // res.send("You have reached the post request!");
});

export default router;
