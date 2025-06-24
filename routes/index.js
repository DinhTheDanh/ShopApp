const productRouter = require("./products");
const categoryRouter = require("./categories");
const brandRouter = require("./brands");
const orderRouter = require("./orders");
const orderDetailRouter = require("./orderDetails");
const newsDetailRouter = require("./newsDetails");
const userRouter = require("./users");
const newRouter = require("./news");

function route(app) {
  app.use("/api/products", productRouter);
  app.use("/api/categories", categoryRouter);
  app.use("/api/news", newRouter);
  app.use("/api/users", userRouter);
  app.use("/api/brands", brandRouter);
  app.use("/api/orders", orderRouter);
  app.use("/api/order-details", orderDetailRouter);
  app.use("/api/news-details", newsDetailRouter);
}

module.exports = route;
