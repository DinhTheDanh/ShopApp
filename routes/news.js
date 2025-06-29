const express = require("express");
const router = express.Router();

const { default: asyncHandler } = require("../middlewares/asyncHandle");
const NewsController = require("../controllers/NewsController");
const { default: validate } = require("../middlewares/validate");
const insertNewsRequest = require("../dtos/request/news/insertNewsRequest");
const updateNewRequest = require("../dtos/request/news/updateNewRequest");

router.get("/", asyncHandler(NewsController.getNews));
router.get("/:id", asyncHandler(NewsController.getNewsById));
router.post(
  "/insert-news",
  validate(insertNewsRequest),
  asyncHandler(NewsController.insertNews)
);
router.put(
  "/update-news/:id",
  validate(updateNewRequest),
  asyncHandler(NewsController.updateNews)
);
router.delete("/delete-news/:id", asyncHandler(NewsController.deleteNews));

module.exports = router;
