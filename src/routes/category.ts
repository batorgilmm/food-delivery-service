import express from "express";
import { createCategory } from "../controller/category";

const categoryRouter = express.Router();

categoryRouter.post("/", createCategory);

export { categoryRouter };
