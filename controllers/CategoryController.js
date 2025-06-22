const Sequelize = require("sequelize");
const db = require("../models/index");
const { Op } = Sequelize;

class CategoryController {
  async getCategories(req, res) {
    const { search = "", page = 1 } = req.query;
    const pageSize = 5;
    const offset = (page - 1) * pageSize;

    let whereClause = {};
    if (search.trim() !== "") {
      whereClause = {
        name: { [Op.like]: `%${search}%` },
      };
    }

    const [categories, totalCategories] = await Promise.all([
      db.Category.findAll({
        where: whereClause,
        limit: pageSize,
        offset: offset,
      }),
      db.Category.count({
        where: whereClause,
      }),
    ]);

    res.status(200).json({
      message: "Lấy danh sách danh mục thành công",
      data: categories,
      currentPage: parseInt(page, 10),
      totalPages: Math.ceil(totalCategories / pageSize),
      totalCategories,
    });
  }
  async getCategoryById(req, res) {
    const categoryId = req.params.id;
    const category = await db.Category.findByPk(categoryId);
    if (!category) {
      res.status(404).json({ message: "Danh mục không tìm thấy" });
    }
    res
      .status(200)
      .json({ message: "Lấy thành công ID danh mục", data: category });
  }
  async insertCategory(req, res) {
    const category = await db.Category.create(req.body);
    res
      .status(201)
      .json({ message: "Thêm category thành công", data: category });
  }
  async deleteCategory(req, res) {
    res.status(200).json({ message: "Xoá thành công" });
  }
  async updateCategory(req, res) {
    res.status(200).json({ message: "Sửa thành công" });
  }
}

module.exports = new CategoryController();
