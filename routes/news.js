const express = require("express");
const router = express.Router();

const { default: asyncHandler } = require("../middlewares/asyncHandle");
const NewsController = require("../controllers/NewsController");
const { default: validate } = require("../middlewares/validate");
const InsertNewsRequest = require("../dtos/request/news/insertNewsRequest");

router.get("/", asyncHandler(NewsController.getNews));
router.get("/:id", asyncHandler(NewsController.getNewsById));
router.post(
  "/insert-news",
  validate(InsertNewsRequest),
  asyncHandler(NewsController.insertNews)
);
router.put("/update-news/:id", asyncHandler(NewsController.updateNews));
router.delete("/delete-news/:id", asyncHandler(NewsController.deleteNews));

module.exports = router;
