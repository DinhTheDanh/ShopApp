const express = require("express");
const router = express.Router();

const ProductController = require("../controllers/ProductController");

router.get("/", ProductController.getProduct);
router.post("/insert-product", ProductController.insertProduct);
router.put("/update-product", ProductController.updateProduct);
router.get("/:id", ProductController.getProductById);
router.delete("/delete-product", ProductController.deleteProduct);

module.exports = router;
