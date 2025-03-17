import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Users page");
});

router.post("/", (req, res) => {
  console.log(req.body);
  res.send("You have reached the post request!");
});

export default router;
