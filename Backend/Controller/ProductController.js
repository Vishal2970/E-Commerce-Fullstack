const product = require("../Models/ProductModels");

const productAdd = async (req, res) => {
  try {
    // Log the incoming request body
    // console.log("Request body:", req.body);

    const { productId, title, descr, imgSrc } = req.body;

    // Log the values of each field
    // console.log("productId:", productId, "title:", title, "descr:", descr, "imgSrc:", imgSrc);

    // Validate the input fields
    if (!productId || !title || !descr || !imgSrc) {
      return res.status(400).json({
        success: false,
        msg: "Enter proper value",
      });
    }

    // Check if the product already exists
    const productExist = await product.findOne({ productId });
    if (productExist) {
      console.log(productExist);
      return res.status(200).json({
        success: false,
        msg: "Product already exists",
        product: productExist,
      });
    }

    // Create the product
    const response = { productId, title, descr, imgSrc };
    await product.create(response);

    // Fetch the created product
    const created = await product.findOne({ productId });
    return res.status(202).json({
      success: true,
      msg: "Product created successfully",
      product: created,
    });
  } catch (error) {
    res.status(400).json({ msg: "Not Added" });
    console.log(error);
  }
};

const getAllProduct = async (req, res) => {
  try {
    const response = await product.find();
    // console.log(response);
    return res.status(200).json({
      success: true,
      product: response,
    });
  } catch (error) {
    console.log(error);
  }
};

const getProductById = async (req, res) => {
  try {
    const {productIds} = req.body;
    console.log(productIds);
    // const response = await product.findById(productIds);
    const productExist = await product.find({ productId:productIds });
    console.log(productExist);
    if (productExist) {
      return res.status(200).json({
        success: true,
        product: productExist,
      });
    } else {
      res.status(404).json({
        success: false,
        msg:response.msg,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { productId } = req.body;
    console.log("Vishal    " + productId);
    const productExist = await product.findOne({ productId });
    console.log(productExist);
    if (productExist) {
      const response = await product.deleteOne({ productId });
      return res.status(200).json({
        success: true,
        msg: "deleted succesfully",
        product: productExist,
      });
    } else {
      return res.status(200).json({
        success: false,
        msg: "id does not exist",
      });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = { productAdd, getAllProduct, deleteProduct, getProductById };
