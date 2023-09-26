import mongoose, { Schema, models } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const notesSchema = new Schema(
  {
    title: String,
    description: String,
  },
  {
    timestamps: true,
  }
);

// If model exists, return user or else create a schema
const User = models.User || mongoose.model("User", userSchema);
export const Notes = models.Notes || mongoose.model("Notes", notesSchema);
export default User;
