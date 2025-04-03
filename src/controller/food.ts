import { Food } from "../schema/Food";

export const createFood = async (request, response) => {
  try {
    const created = await Food.create(request.body);

    response.json({ success: true, food: created });
  } catch (error) {
    response.status(401).json({ success: false, msg: error.message });
  }
};

export const getFoods = async (_request, response) => {
  const foods = await Food.find();

  response.json({ success: true, foods });
};
