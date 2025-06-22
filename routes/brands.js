const express = require("express");
const router = express.Router();

const BrandController = require("../controllers/BrandController");
const { default: asyncHandler } = require("../middlewares/asyncHandle");

router.get("/", asyncHandler(BrandController.getBrands));
router.post("/insert-brand", asyncHandler(BrandController.insertBrand));
router.put("/update-brand", asyncHandler(BrandController.updateBrand));
router.get("/:id", asyncHandler(BrandController.getBrandById));
router.delete("/delete-brand", asyncHandler(BrandController.deleteBrand));

module.exports = router;
