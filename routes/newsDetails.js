const express = require("express");
const router = express.Router();

const NewsDetailController = require("../controllers/NewsDetailController");
const { default: asyncHandler } = require("../middlewares/asyncHandle");
const { default: validate } = require("../middlewares/validate");
const insertNewsDetailSchema = require("../dtos/request/newsDetail/insertNewsDetailRequest");

// Lấy tất cả chi tiết tin tức (có phân trang, search)
router.get("/", asyncHandler(NewsDetailController.getNewsDetails));

// Lấy chi tiết tin tức theo ID
router.get("/:id", asyncHandler(NewsDetailController.getNewsDetailById));

// Thêm chi tiết tin tức

router.post(
  "/insert-news_detail",
  validate(insertNewsDetailSchema),
  asyncHandler(NewsDetailController.insertNewDetails)
);

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
