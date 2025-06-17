const express = require("express");
const router = express.Router();

const OrderController = require("../controllers/OrderController");

router.get("/", OrderController.getOrder);
router.post("/insert-order", OrderController.insertOrder);
router.put("/update-order", OrderController.updateOrder);
router.get("/:id", OrderController.getOrderById);
router.delete("/delete-order", OrderController.deleteOrder);

module.exports = router;
