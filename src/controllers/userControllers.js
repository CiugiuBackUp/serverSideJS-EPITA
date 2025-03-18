import User from "../models/userModels.js";
import hashPassword from "../middleware/passencrypt.js";

export const userLogIn = (req, res) => {
  res.send("User login");
};

export const userSignUp = async (req, res) => {
  //Get the data from the request
  const { firstName, email, lastName, imageUrl, role, password } = req.body;
  console.log(password);
  console.log(typeof password);
  const hashedPassword = hashPassword(password);
  console.log(hashedPassword);
  // Create new user
  const newUser = new User({
    firstName,
    lastName,
    email,
    password: hashedPassword,
    role,
    imageUrl,
    inventory: [],
  });
  // Save the user to teh database
  const savedUser = await newUser.save();
  res.status(201).json(savedUser);
};
