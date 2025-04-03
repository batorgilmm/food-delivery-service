import express from "express";
import { createCategory, getCategoriesWithFoods } from "../controller/category";

const categoryRouter = express.Router();

categoryRouter
  .post("/", createCategory)
  .get("/with-foods", getCategoriesWithFoods);

export { categoryRouter };
