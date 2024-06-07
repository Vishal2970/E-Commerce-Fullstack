const mongoose=require("mongoose");

const formSchema=new mongoose.Schema({
    name:{
     type:String,
     require:true,   
    },
    number:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
    },
    msg:{
        type:String,
        require:true,
    }
});

const form=new mongoose.model("form",formSchema);
module.exports=form;