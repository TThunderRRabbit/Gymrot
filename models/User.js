import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  nickname: String,
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: { type: String, required: true, minlength: 6 },
});

export default mongoose.modelsUser || mongoose.model("User", userSchema);
