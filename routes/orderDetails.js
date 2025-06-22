const express = require("express");
const router = express.Router();

const OrderDetailController = require("../controllers/OrderDetailController");
const { default: asyncHandler } = require("../middlewares/asyncHandle");

router.get("/", asyncHandler(OrderDetailController.getOrderDetail));
router.post(
  "/insert-order-detail",
  asyncHandler(OrderDetailController.insertOrderDetail)
);
router.put(
  "/update-order-detail",
  asyncHandler(OrderDetailController.updateOrderDetail)
);
router.get("/:id", asyncHandler(OrderDetailController.getOrderDetailById));
router.delete(
  "/delete-order-detail",
  asyncHandler(OrderDetailController.deleteOrderDetail)
);

module.exports = router;
