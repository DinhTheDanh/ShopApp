const express = require("express");
const router = express.Router();

const OrderController = require("../controllers/OrderController");
const {
  default: insertOrderRequest,
} = require("../dtos/request/order/insertOrderRequest");
const { default: asyncHandler } = require("../middlewares/asyncHandle");
const { default: validate } = require("../middlewares/validate");

router.get("/", asyncHandler(OrderController.getOrders));
router.post(
  "/insert-order",
  validate(insertOrderRequest),
  asyncHandler(OrderController.insertOrder)
);
router.put("/update-order/:id", asyncHandler(OrderController.updateOrder));
router.get("/:id", asyncHandler(OrderController.getOrderById));
router.delete("/delete-order/:id", asyncHandler(OrderController.deleteOrder));

module.exports = router;
