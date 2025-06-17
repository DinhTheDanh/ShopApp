const express = require("express");
const router = express.Router();

const CategoryController = require("../controllers/CategoryController");

router.get("/", CategoryController.getCategory);
router.post("/insert-category", CategoryController.insertCategory);
router.put("/update-category", CategoryController.updateCategory);
router.get("/:id", CategoryController.getCategoryById);
router.delete("/delete-category", CategoryController.deleteCategory);

module.exports = router;
