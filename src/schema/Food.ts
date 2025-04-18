import mongoose from "mongoose";

const FoodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    default: 0,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "category",
  },
  ingredients: [
    {
      type: String,
    },
  ],
});

export const Food = mongoose.model("food", FoodSchema);
