const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt=require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    require: true,
  },
  mobile: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  isAdmin:{
    type:Boolean,
    default:false,
  }
});

userSchema.pre("save", async function (next) {
  const user = this;
  if (!user.isModified("password")) {
    next();
  }
  try {
    const saltRound = await bcrypt.genSalt(10);
    const Hash_Password = await bcrypt.hash(user.password, saltRound);
    user.password = Hash_Password;
  } catch (error) {
    next(error);
  }
});

//for token
userSchema.methods.generateToken=async function(){
    try {
        return jwt.sign({
            userId:this._id.toString(),
            email:this.email,
            isAdmin:this.isAdmin,
        },
        process.env.JWT_SECRET_KEY,
        {
            expiresIn:"7d",
        }
    )
    } catch (error) {
        console.log(error);
    }
}

//password matching   before it do hashing
userSchema.methods.passwordMatch = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = new mongoose.model("users", userSchema);
module.exports = User;