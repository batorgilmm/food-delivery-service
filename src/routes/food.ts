import express from "express";
import { createFood, getFoods } from "../controller/food";

const foodRouter = express.Router();

foodRouter.post("/", createFood).get("/", getFoods);

export { foodRouter };
