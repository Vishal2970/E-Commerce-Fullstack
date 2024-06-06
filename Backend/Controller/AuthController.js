const User=require("../Models/userModels");
const bcrypt =require("bcrypt")

const home =async(req,res)=>{
    try {
        res.status(200).send("Hello Vishal From home");
    } catch (error) {
        console.error(error)
    }
}

const login=async(req,res)=>{
    try {
        const {email,password}=req.body;
        const userExist=await User.findOne({email});
        if(!userExist){
            return res.status(400).json({msg:"Invalid credential"});
        }
        const val=userExist.passwordMatch(password)
        if(val){
            res.status(200).json({
                msg:"Login sucesfull",
            })
        }

    } catch (error) {
        console.error(error);
    }    
}
const signup = async (req,res)=>{
    try {
        const {fullname,mobile,email,password}=req.body;
        const userExist = await User.findOne({email});
        if(userExist){
            return res.status(400).json({
                msg:"user already exist"
            })
        }
        const create=await User.create({fullname,mobile,email,password});
        res.status(400).json({
            msg:"you are succesfully registered"
        })
    } catch (error) {
        console.error(error);
    }
}


module.exports= {home,login,signup};