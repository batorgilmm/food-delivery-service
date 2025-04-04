"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCategoriesWithFoods = exports.createCategory = void 0;
const Category_1 = require("../schema/Category");
const createCategory = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const created = yield Category_1.Category.create(request.body);
        response.json({ success: true, category: created });
    }
    catch (error) {
        response.status(401).json({ success: false, msg: error.message });
    }
});
exports.createCategory = createCategory;
const getCategoriesWithFoods = (_request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const categories = yield Category_1.Category.aggregate([
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
    }
    catch (error) {
        response.status(404).json({ success: true, error: error.message });
    }
});
exports.getCategoriesWithFoods = getCategoriesWithFoods;
//# sourceMappingURL=category.js.map