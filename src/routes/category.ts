import express from "express";
import {
  createCategory,
  getCategories,
  getCategoriesWithFoods,
} from "../controller/category";
import { checkToken } from "../middleware/check-token";

const categoryRouter = express.Router();

categoryRouter
  .post("/", checkToken, createCategory)
  .get("/", getCategories)
  .get("/with-foods", getCategoriesWithFoods);

export { categoryRouter };
