const express = require("express");
const router = express.Router();

const BrandController = require("../controllers/BrandController");

router.get("/", BrandController.getBrand);
router.post("/insert-brand", BrandController.insertBrand);
router.put("/update-brand", BrandController.updateBrand);
router.get("/:id", BrandController.getBrandById);
router.delete("/delete-brand", BrandController.deleteBrand);

module.exports = router;
