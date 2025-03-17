import express from "express";
import test from "./test.js";
const app = express();
const port = process.env.PORT || 3000;

// MIDDLEWARE
app.use((req, res, next) => {
  test();
  const now = Date.now();
  req.requestTime = now;
  next();
});
// data sent to the user
app.get("/", (req, res) => {
  res.send(req.requestTime.toString());
});

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
