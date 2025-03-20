import User from "../models/userModels.js";

export const userLogIn = (req, res) => {
  res.send("User login");
};

export const userSignUp = async (req, res) => {
  try {
    //Get the data from the request
    const { firstName, email, lastName, imageUrl, role, inventory } = req.body;
    const hashedPassword = req.hashedPassword;
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
    res.status(201).json({
      firstName: savedUser.firstName,
      email: savedUser.email,
      role: savedUser.role,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
