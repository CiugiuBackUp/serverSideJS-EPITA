import express from "express";
import router from "./routes/users.js";
const app = express();
const port = process.env.PORT || 3000;

// MIDDLEWARE
app.use(express.json());
app.use("/api/users", router);

// data sent to the user
// app.get("/", (req, res) => {
//   res.send(req.requestTime.toString());
// });

app.get("/", (req, res) => {
  res.send("Welcome to my API! Chamber of commerce backed 🤳");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
