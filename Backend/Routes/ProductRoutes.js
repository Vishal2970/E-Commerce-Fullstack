const express = require("express");
const router = express.Router();
const ProductController = require("../Controller/ProductController")

router.route("/addProduct").post(ProductController)


module.exports = router;