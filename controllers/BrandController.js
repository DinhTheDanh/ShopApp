const Sequelize = require("sequelize");
const db = require("../models/index");
class BrandController {
  async getBrand(req, res) {
    res.status(200).json({ message: "Lấy danh sách brand thành công" });
  }

  async getBrandById(req, res) {
    res.status(200).json({ message: "Lấy brand theo ID thành công" });
  }

  async insertBrand(req, res) {
    try {
      const brand = await db.Brand.create(req.body);
      res.status(201).json({ message: "Thêm brand thành công", data: brand });
    } catch (err) {
      res
        .status(500)
        .json({ message: "Lỗi khi thêm brand", errors: err.message });
    }
  }

  async deleteBrand(req, res) {
    res.status(200).json({ message: "Xoá brand thành công" });
  }

  async updateBrand(req, res) {
    res.status(200).json({ message: "Cập nhật brand thành công" });
  }
}

module.exports = new BrandController();
