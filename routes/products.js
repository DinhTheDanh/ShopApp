const express = require("express");
const router = express.Router();

const ProductController = require("../controllers/ProductController");
const {
  default: insertProductRequest,
} = require("../dtos/request/product/insertProductRequest");
const {
  default: updateProductRequest,
} = require("../dtos/request/product/updateProductRequest");
const { default: asyncHandler } = require("../middlewares/asyncHandle");
const { default: validate } = require("../middlewares/validate");

//Routes Product
router.get("/", asyncHandler(ProductController.getProducts));
router.get("/:id", asyncHandler(ProductController.getProductById));
router.post(
  "/insert-product",
  validate(insertProductRequest),
  asyncHandler(ProductController.insertProduct)
);
router.put(
  "/update-product/:id",
  validate(updateProductRequest),
  asyncHandler(ProductController.updateProduct)
);
router.delete(
  "/delete-product/:id",
  asyncHandler(ProductController.deleteProduct)
);

module.exports = router;
