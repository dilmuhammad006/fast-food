import { Router } from "express";
import categoryController from "../controllers/category.controller.js";
import { ValidationMiddlewares } from "../middleware/validation.middleware.js";
import {
  createCategorySchema,
  updateCategorySchema,
} from "../schema/category.schema.js";

const categoryRoute = Router();

categoryRoute
  .get("/", categoryController.getAllCategory)
  .get("/:id", categoryController.getCategoryById)
  .post(
    "/",
    ValidationMiddlewares(createCategorySchema),
    categoryController.addCategory
  )
  .delete("/:id", categoryController.deleteCategory)
  .put(
    "/:id",
    ValidationMiddlewares(updateCategorySchema),
    categoryController.updateCategory
  );

export default categoryRoute;
