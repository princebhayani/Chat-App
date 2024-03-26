import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const signup = async(req, res) => {
  try {
    const { fullName, username, password, confirmPassword, gender} = req.body;
    if(password !== confirmPassword){
      return res.status(400).json({error:"Password don't match"})
    }

    const user = await User.findOne({username});
    if(user){
      return res.status(400).json({error:"Username is already exist"});
    }

    //hash password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password,salt);

    //random profile pic
    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;


    const newUser = new User({
      fullName,
      username,
      password:hashPassword,
      gender,
      profilePic: gender==="male"?boyProfilePic :girlProfilePic,
    });

    if(newUser){
      //generate JWT token here
      generateTokenAndSetCookie(newUser._id,res);
      await newUser.save();
      res.status(201).json({
        _id:newUser._id,
        fullName:newUser.fullName,
        username:newUser.username,
        profilePic:newUser.profilePic
      });
    }else{
      res.status(400).json({error:"Invalid user data"});
    }

  } catch (error) {
    console.log("Error in signup",error.message);
    res.status(500).json({error:"Internal Server Error"});
  }
};

export const login = (req, res) => {
  console.log("login");
};

export const logout = (req, res) => {
  console.log("logout");
};
