const express = require("express");
const router = express.Router();
const CartController = require("../Controller/CartController");
const authMiddleware = require("../Middleware/authMiddleware");
// const getAllCartProduct = require("../Controller/CartController")

router.route("/addingcart").post(authMiddleware, CartController.AddingCart);
router
  .route("/getallcartproduct")
  .post(authMiddleware, CartController.getAllCartProduct);

module.exports = router;
