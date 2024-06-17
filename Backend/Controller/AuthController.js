const User = require("../Models/userModels");
const bcrypt = require("bcrypt");

// const home = async (req, res) => {
//   try {
//     res.status(200).send("Hello Vishal From home");
//   } catch (error) {
//     console.error(error);
//   }
// };
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userExist = await User.findOne({ email });
    const val = await userExist.passwordMatch(password);
    if (!userExist && !val) {
      return res.status(400).json({ msg: "Invalid credential" });
    }
    const data={
      name:userExist.fullName,
      email:userExist.email,
      mobile:userExist.mobile
    }
    if (val) {
      res.status(200).json({
        user:data,
        msg: "Login sucesfull",
        token:await userExist.generateToken(),
      });
    }
    else{
        res.status(401).json({
            msg:"wrong credential"
        })
    }
  } catch (error) {
    console.error(error);
  }
};
const signup = async (req, res) => {
  try {
    const { fullName, mobile, email, password } = req.body;
    // console.log(req.body);
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({
        msg: "user already exist",
      });
    }
    const create = await User.create({ fullName:fullName, mobile:mobile, email:email, password:password });
    res.status(201).json({
      msg: "you are succesfully registered",
      token:await create.generateToken(),
      userId:create._id.toString(),
    });
  } catch (error) {
    res.status(501).json({
        msg:"Not registered"
    })
    console.error(error);
  }
};

module.exports = {  login, signup };//home