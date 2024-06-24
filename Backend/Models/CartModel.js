const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  email: {
    type: String,
    require: true,
  },
  productId: {
    type: String,
    require:true,
  },
});

const cartmodel = new mongoose.model("Cart", cartSchema);
module.exports = cartmodel;
