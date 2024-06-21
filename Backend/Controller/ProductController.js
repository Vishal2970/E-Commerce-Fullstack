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
                msg: "Enter proper value"
            });
        }

        // Check if the product already exists
        const productExist = await product.findOne({ productId });
        if (productExist) {
            console.log(productExist);
            return res.status(200).json({
                success: false,
                msg: "Product already exists",
                product:productExist
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
            product: created
        });
    } catch (error) {
        res.status(400).json({ msg: "Not Added" });
        console.log(error);
    }
};

module.exports = productAdd;
