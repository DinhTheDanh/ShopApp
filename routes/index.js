const productRouter = require("./products");
const categoryRouter = require("./categories");
const brandRouter = require("./brands");
const orderRouter = require("./orders");
const orderDetailRouter = require("./orderDetails");

function route(app) {
  app.use("/api/products", productRouter);
  app.use("/api/categories", categoryRouter);
  app.use("/api/brands", brandRouter);
  app.use("/api/orders", orderRouter);
  app.use("/api/order-details", orderDetailRouter);
}

module.exports = route;
