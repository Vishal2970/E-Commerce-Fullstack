const cartmodel = require("../Models/CartModel");

const AddingCart = async (req, res) => {
  try {
    const response = req.body;
    await cartmodel.create(response);
    return res.status(200).json({
      success: true,
      msg: "Added to Cart",
    });
  } catch (error) {
    console.log(error);
  }
};

const getAllCartProduct=async(req,res)=>{
    const {email} = req.body;
    // console.log(email);
    const response=await cartmodel.find({email:email})
    console.log(response);
    if(response.length>0){
        const productIds=response.map(item=>item.productId);
        return res.status(200).json({
            success:true,
            productIds:productIds,
        })
    }else{
        return res.status(404).json({
            success:false,
            msg:"No Product found"
        })
    }
}
module.exports = {AddingCart,getAllCartProduct};
