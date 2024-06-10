const form=require("../Models/formModels");


const formSend=async(req,res)=>{
    try {
        console.log(req.body);
        const response=req.body;
        await form.create(response);
        //res.status(200).send();
        return res.status(202).json({ msg: "Posted successfully"});
    } catch (error) {
        res.status(400).json({msg:"Not Posted"})
        console.log(error);
    }
}
module.exports=formSend;