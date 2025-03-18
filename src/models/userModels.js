import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  inventory: {
    type: Array,
    required: false,
  },
  email: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: false,
  },
});

export default mongoose.model("userSchema", userSchema);
