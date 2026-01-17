import User from "../users/user.model.js";
import { signToken } from "../../utils/jwt.js";

export const registerUser = async (data) => {
  const user = await User.create(data);
  const token = signToken({ id: user._id });
  return { user, token };
};

export const loginUser = async (email, password) => {
  const user = await User.findOne({ email }).select("+password");
  if (!user || !(await user.comparePassword(password))) {
    throw new Error("Invalid credentials");
  }
  const token = signToken({ id: user._id });
  return { user, token };
};
