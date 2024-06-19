const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    productId: {
        type: String,
        required: true,
        unique: true,
    },
    title: {
        type: String,
        required: true,
    },
    descr: {
        type: String,
        required: true,
    },
    imgSrc: {
        type: String,
        required: true,
    },
});

const product = mongoose.model("Product", productSchema);

module.exports = product;