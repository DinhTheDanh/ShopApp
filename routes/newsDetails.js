const express = require("express");
const router = express.Router();

const NewsDetailController = require("../controllers/NewsDetailController");
const { default: asyncHandler } = require("../middlewares/asyncHandle");

// Lấy tất cả chi tiết tin tức (có phân trang, search)
router.get("/", asyncHandler(NewsDetailController.getNewsDetails));

// Lấy chi tiết tin tức theo ID
router.get("/:id", asyncHandler(NewsDetailController.getNewsDetailById));

// Cập nhật chi tiết tin tức
router.put(
  "/update-news_detail/:id",
  asyncHandler(NewsDetailController.updateNewsDetail)
);

// Xoá chi tiết tin tức
router.delete(
  "/delete-news_detail/:id",
  asyncHandler(NewsDetailController.deleteNewsDetail)
);

module.exports = router;
