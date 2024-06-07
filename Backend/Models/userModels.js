const mongoose= require('mongoose');
const bcrypt=require("bcrypt")

const userSchema=new mongoose.Schema({
    fullName:{
        type:String,
        require:true,
    },
    mobile:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        require:true,
    }
});


userSchema.pre("save",async function(next){
    const user=this;
    if(!user.isModified("password")){
        next();
    }
    try {
        console.log("salt");
        const saltRound=await bcrypt.genSalt(10);
        const Hash_Password=await bcrypt.hash(user.password,saltRound);
        user.password=Hash_Password;
    } catch (error) {
        next(error);
    }
})

//password matching   before it do hashing
userSchema.methods.passwordMatch = async function(password){
    return bcrypt.compare(password,this.password);
}

const User=new mongoose.model("User",userSchema);
module.exports=User;