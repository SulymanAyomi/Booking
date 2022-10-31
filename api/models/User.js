import mongoose from "mongoose";
const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Username is required"],
      unique: [true, "Username already exist"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: [true, " Email already exist"],
    },
    country: {
      type: String,
      required: [true, "Country is required"],
    },
    img: {
      type: String,
    },
    city: {
      type: String,
      required: [true, "City is required"],
    },
    phone: {
      type: String,
      required: [true, "Phone is required"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
