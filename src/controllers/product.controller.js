import productModel from "../models/product.model.js";

const getAllProducts = async (req, res) => {
  try {
    const products = await productModel.find().populate("category");

    res.status(200).send({
      message: "Success",
      count: products.length,
      data: products,
    });
  } catch (error) {
    console.log(error.message);
  }
};

const addProduct = async (req, res) => {
  try {
    const { name, price, category, imageUrl, description } = req.body;

    const product = await productModel.create({
      name,
      price,
      category,
      description,
      imageUrl,
    });

    res.status(201).send({
      data: product,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export default { getAllProducts , addProduct};
