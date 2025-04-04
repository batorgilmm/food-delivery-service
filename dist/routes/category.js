"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryRouter = void 0;
const express_1 = __importDefault(require("express"));
const category_1 = require("../controller/category");
const categoryRouter = express_1.default.Router();
exports.categoryRouter = categoryRouter;
categoryRouter
    .post("/", category_1.createCategory)
    .get("/with-foods", category_1.getCategoriesWithFoods);
//# sourceMappingURL=category.js.map