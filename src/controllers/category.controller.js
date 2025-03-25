import { isValidObjectId } from "mongoose";
import categoryModel from "../models/category.model.js";

const getAllCategory = async (req, res) => {
  try {
    let { limit = 10, page = 1, sort = "asc" } = req.query;

    limit = Math.min(Math.max(Number(limit), 1), 100);
    page = Math.max(Number(page), 1);

    const total = await categoryModel.countDocuments();
    const category = await categoryModel
      .find()
      .sort({ name: sort })
      .skip((page - 1) * limit)
      .limit(limit);

    res.status(200).json({
      message: "Success",
      total,
      limit,
      page,
      totalPages: Math.ceil(total / limit),
      data: category,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({
      message: "Error while get category",
    });
  }
};

const addCategory = async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res.status(400).send({
        message: "Request not completed",
      });
    }

    const founded = await categoryModel.findOne({ name });
    if (founded) {
      return res.status(409).send({
        message: "This category already exists!",
      });
    }

    const category = await categoryModel({ name });

    category.save();

    res.status(200).send({
      message: "Success",
      data: category,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({
      message: "Error while add category",
    });
  }
};

const getCategoryById = async (req, res) => {
  try {
    const id = req.params.id;
    if (!isValidObjectId(id)) {
      return res.status(404).send({
        message: "Category with given ID not found!",
      });
    }

    const category = await categoryModel.findById(id);

    res.status(200).send({
      message: "Success",
      data: category,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({
      message: "Error while get category with given ID",
    });
  }
};

const deleteCategory = async (req, res) => {
  try {
    const id = req.params.id;

    if (!isValidObjectId(id)) {
      return res.status(404).send({
        message: "Category with given ID not found!",
      });
    }

    await categoryModel.findByIdAndDelete(id);
    res.status(204).send();
  } catch (error) {
    console.log(error.message);
    res.status(500).send({
      message: "Eror while delete category",
    });
  }
};

const updateCategory = async (req, res) => {
  try {
    const id = req.params.id;

    if (!isValidObjectId(id)) {
      return res.status(404).send({
        message: "Category with given ID not found!",
      });
    }
    const { name } = req.body;
    if (!name) {
      return res.status(400).send({
        message: "Request not completed!",
      });
    }

    const category = await categoryModel.findByIdAndUpdate(
      { _id: id },
      { name },
      { new: true }
    );

    res.status(200).send({
      message: "Success",
      data: category,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({
      message: "Error while update category",
    });
  }
};

export default {
  getAllCategory,
  addCategory,
  getCategoryById,
  deleteCategory,
  updateCategory,
};
