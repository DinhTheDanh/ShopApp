const express = require("express");
const router = express.Router();

const { default: asyncHandler } = require("../middlewares/asyncHandle");
const HealthCheckController = require("../controllers/HealthCheckController");
const { default: validate } = require("../middlewares/validate");

router.get("/", asyncHandler(HealthCheckController.getHealthCheck));

module.exports = router;
