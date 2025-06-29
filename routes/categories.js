const express = require("express");
const router = express.Router();

const { default: asyncHandler } = require("../middlewares/asyncHandle");
const CategoryController = require("../controllers/CategoryController");

router.get("/", asyncHandler(CategoryController.getCategories));
router.get("/:id", asyncHandler(CategoryController.getCategoryById));
router.post(
  "/insert-category",
  asyncHandler(CategoryController.insertCategory)
);
router.put(
  "/update-category/:id",
  asyncHandler(CategoryController.updateCategory)
);
router.delete(
  "/delete-category/:id",
  asyncHandler(CategoryController.deleteCategory)
);

module.exports = router;
