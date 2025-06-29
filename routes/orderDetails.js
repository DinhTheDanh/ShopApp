const express = require("express");
const router = express.Router();

const OrderDetailController = require("../controllers/OrderDetailController");
const { default: asyncHandler } = require("../middlewares/asyncHandle");

router.get("/", asyncHandler(OrderDetailController.getOrderDetails));
router.post(
  "/insert-order_detail",
  asyncHandler(OrderDetailController.insertOrderDetail)
);
router.put(
  "/update-order_detail/:id",
  asyncHandler(OrderDetailController.updateOrderDetail)
);
router.get("/:id", asyncHandler(OrderDetailController.getOrderDetailById));
router.delete(
  "/delete-order_detail/:id",
  asyncHandler(OrderDetailController.deleteOrderDetail)
);

module.exports = router;
