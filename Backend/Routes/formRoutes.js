const express =require("express");
const router=express.Router();
const formController=require("../Controller/formController");


router.route("/contactUs").post(formController);

module.exports=router;