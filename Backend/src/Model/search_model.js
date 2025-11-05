import mongoose from "mongoose";
import { User } from "./user_model.js";
const SearchSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  term: String,
  timestamp: { type: Date, default: Date.now },
});

export const Search =  mongoose.model("Search", SearchSchema);
