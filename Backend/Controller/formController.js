const form=require("../Models/formModels");


const formSend=async(req,res)=>{
    try {
        console.log(req.body);
        const response=req.body;
        await form.create(response);
        res.status(200).send("Hello posted successfully");
    } catch (error) {
        console.log(error);
    }
}
module.exports=formSend;