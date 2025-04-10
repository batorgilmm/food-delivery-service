import { Category } from "../schema/Category";
import jwt from "jsonwebtoken";

export const createCategory = async (request, response) => {
  try {
    const created = await Category.create(request.body);
    response.json({ success: true, category: created });
  } catch (error) {
    response.status(401).json({ success: false, msg: error.message });
  }
};

export const getCategories = async (request, response) => {
  try {
    const categories = await Category.find();
    response.json({ success: true, categories });
  } catch (error) {
    response.status(401).json({ success: false, msg: error.message });
  }
};

export const getCategoriesWithFoods = async (_request, response) => {
  try {
    const categories = await Category.aggregate([
      {
        $lookup: {
          from: "foods",
          localField: "_id",
          foreignField: "category",
          as: "foods",
        },
      },
    ]);

    response.json({ success: true, categories });
  } catch (error) {
    response.status(404).json({ success: true, error: error.message });
  }
};
