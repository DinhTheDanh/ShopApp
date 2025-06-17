const express = require("express");
const router = express.Router();

const OrderDetailController = require("../controllers/OrderDetailController");

router.get("/", OrderDetailController.getOrderDetail);
router.post("/insert-order-detail", OrderDetailController.insertOrderDetail);
router.put("/update-order-detail", OrderDetailController.updateOrderDetail);
router.get("/:id", OrderDetailController.getOrderDetailById);
router.delete("/delete-order-detail", OrderDetailController.deleteOrderDetail);

module.exports = router;
