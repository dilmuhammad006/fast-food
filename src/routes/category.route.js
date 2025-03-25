import { Router } from "express";
import categoryController from "../controllers/category.controller.js";

const categoryRoute = Router();

categoryRoute
  .get("/", categoryController.getAllCategory)
  .get("/:id", categoryController.getCategoryById)
  .post("/", categoryController.addCategory)
  .delete("/:id", categoryController.deleteCategory)
  .put("/:id", categoryController.updateCategory);

export default categoryRoute;
