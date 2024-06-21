const express = require("express");
const router = express.Router();
const ProductController = require("../Controller/ProductController")

router.route("/addProduct").post(ProductController.productAdd);
router.route("/getAllProduct").get(ProductController.getAllProduct);



module.exports = router;