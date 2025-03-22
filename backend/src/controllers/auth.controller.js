import cloudinary from "../lib/cloudinary.js";
import { generateToken } from "../lib/utils.js";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res) => {
  const { fullName, email, password } = req.body;
  try {
    if (!password || password.length < 6) {
      return res
        .status(400)
        .json({ message: "password must be atleast of 6 charecters " });
    }

    const user = await User.findOne({ email });

    if (user) return res.status(400).json({ message: "Email already exits" });

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      fullName,
      email,
      password: hashedPassword,
    });
    if (newUser) {
      //generate jwt tokem
      await newUser.save();
      generateToken(newUser._id, res);
      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        email: newUser.email,
        profilePic: newUser.profilePic,
      });
    } else {
      res.status(400).json({ message: "Invalid user data" });
    }
  } catch (error) {
    console.log("error in creating signup controller", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const login = async (req, res) => {
  // ✅ Fix: Use req.body
  const { email, password } = req.body; // ✅ Fix: Use req.body instead of res.body

  try {
    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Compare passwords
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Generate JWT token
    generateToken(user._id, res);

    // Send response with user data (excluding password)
    res.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      email: user.email,
      profilePic: user.profilePic,
    });
  } catch (error) {
    console.log("Error in login controller:", error.message);
    res.status(500).json({ message: "Internal server error" });
}
};

export const logout = (req, res) => {
    try {
        res.cookie("jwt","",{maxAge:0});
        res.status(200).json({messgae :"logged out sucessfully "})
    } catch (error) {
        console.log("Error in login controller:", error.message);
        res.status(500).json({ message: "Internal server error" });
        
    }
};

export const updateProfile = async (req, res) => {
  try {
    console.log("Update profile request received:", req.body); //This is running

    const { profilePic } = req.body;
    const userId = req.user._id;

    if (!profilePic) {
      return res.status(400).json({ message: "Profile pic is required" });
    }

    // Upload image to Cloudinary
    const uploadResponse = await cloudinary.uploader.upload(profilePic);
    console.log("Cloudinary upload response:", uploadResponse); //this is also running 

    // Update user profile in database
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { profilePics: uploadResponse.secure_url }, // Save new URL
      { new: true }
    );

    if (!updatedUser) {
      console.log("User not found!"); // ✅ Log missing user
      return res.status(404).json({ message: "User not found" });
    }

    console.log("Profile successfully updated:", updatedUser); // ✅ Log successful update
    res.status(200).json(updatedUser);
  } catch (error) {
    console.log("Error in updateProfile:", error); // ✅ Log errors
    res.status(500).json({ message: "Internal server error" });
  }
};


export const checkAuth = (req,res) => { 
    try {
        res.status(200).json(req.user);
    } catch (error) {
        console.log("error on checkAuth collector ",error.message)
        res.status(500).json({message:"Internal server error"})
    }
 }