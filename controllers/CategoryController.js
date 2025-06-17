const Sequelize = require("sequelize");
const db = require("../models/index");
class CategoryController {
  async getCategory(req, res) {
    res.status(200).json({ message: "Lấy thành công" });
  }
  async getCategoryById(req, res) {
    res.status(200).json({ message: "Lấy thành công ID " });
  }
  async insertCategory(req, res) {
    try {
      const category = await db.Category.create(req.body);
      res
        .status(201)
        .json({ message: "Thêm category thành công", data: category });
    } catch (err) {
      res
        .status(500)
        .json({ message: "Lỗi khi thêm category", errors: err.message });
    }
  }
  async deleteCategory(req, res) {
    res.status(200).json({ message: "Xoá thành công" });
  }
  async updateCategory(req, res) {
    res.status(200).json({ message: "Sửa thành công" });
  }
}

module.exports = new CategoryController();
