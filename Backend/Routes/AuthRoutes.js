const express=require('express');
const router=express.Router();
const auth_Controller=require("../Controller/AuthController");

router.route("/").get(auth_Controller.home);


module.exports=router;