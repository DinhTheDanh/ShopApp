const Sequelize = require("sequelize");
const db = require("../models/index");
import insertProductRequest from "../dtos/request/insertProductRequest";
class ProductController {
  async getProduct(req, res) {
    try {
      const product = await db.Product.findAll();
      res.status(200).json({ message: "Lấy thành công", data: product });
    } catch (err) {
      res
        .status(500)
        .json({ message: "Lỗi khi lấy sản phẩm", errors: err.message });
    }
  }
  async getProductById(req, res) {
    res.status(200).json({ message: "Lấy thành công ID sản phẩm" });
  }
  async insertProduct(req, res) {
    const { error } = insertProductRequest.validate(req.body);
    if (error) {
      return res.status(400).json({
        message: "Lỗi khi thêm sản phẩm mới",
        errors: error.details[0]?.message,
      });
    }
    try {
      const product = await db.Product.create(req.body);
      res.status(201).json({ message: "Thêm mới thành công", data: product });
    } catch (err) {
      res
        .status(500)
        .json({ message: "Lỗi khi thêm sản phẩm mới", errors: err });
    }
  }
  async deleteProduct(req, res) {
    res.status(200).json({ message: "Xoá thành công" });
  }
  async updateProduct(req, res) {
    res.status(200).json({ message: "Sửa thành công" });
  }
}

module.exports = new ProductController();
