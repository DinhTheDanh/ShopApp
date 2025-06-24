const express = require("express");
const router = express.Router();

const UserController = require("../controllers/UserController");
const InsertUserRequest = require("../dtos/request/users/insertUserRequest");
const { default: asyncHandler } = require("../middlewares/asyncHandle");
const { default: validate } = require("../middlewares/validate");

router.post(
  "/insert-user",
  validate(InsertUserRequest),
  asyncHandler(UserController.insertUser)
);
router.put("/update-user/:id", asyncHandler(UserController.updateUser));

module.exports = router;
