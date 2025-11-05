
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    googleId: { type: String },
    githubId: { type: String },
    displayName: { type: String },
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String, unique: true, required: true },
    image: { type: String },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", UserSchema);