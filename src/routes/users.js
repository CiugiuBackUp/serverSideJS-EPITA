import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Users page");
});

router.post("/", (req, res) => {
  // const firstname = req.body.firstName;
  // const email = req.body.email;
  // const password = req.body.password;
  const { firstName, email, password } = req.body;
  console.log(firstName, email, password);
  res.json({ firstName, email, password, _id: "randomId" });
  // res.send("You have reached the post request!");
});

export default router;
