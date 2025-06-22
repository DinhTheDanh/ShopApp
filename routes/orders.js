const express = require("express");
const router = express.Router();

const OrderController = require("../controllers/OrderController");
const { default: asyncHandler } = require("../middlewares/asyncHandle");

router.get("/", asyncHandler(OrderController.getOrder));
router.post("/insert-order", asyncHandler(OrderController.insertOrder));
router.put("/update-order", asyncHandler(OrderController.updateOrder));
router.get("/:id", asyncHandler(OrderController.getOrderById));
router.delete("/delete-order", asyncHandler(OrderController.deleteOrder));

module.exports = router;
