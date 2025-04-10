import express from "express";
import { createFood, getFoods } from "../controller/food";
import { checkToken } from "../middleware/check-token";

const foodRouter = express.Router();

foodRouter.post("/", checkToken, createFood).get("/", getFoods);

export { foodRouter };
