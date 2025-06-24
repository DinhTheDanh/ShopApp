const Sequelize = require("sequelize");
const db = require("../models/index");
const { Op } = Sequelize;

class BrandController {
  async getBrands(req, res) {
    const { search = "", page = 1 } = req.query;
    const pageSize = 5;
    const offset = (page - 1) * pageSize;

    let whereClause = {};
    if (search.trim() !== "") {
      whereClause = {
        name: { [Op.like]: `%${search}%` },
      };
    }

    const [brands, totalBrands] = await Promise.all([
      db.Brand.findAll({
        where: whereClause,
        limit: pageSize,
        offset: offset,
      }),
      db.Brand.count({
        where: whereClause,
      }),
    ]);

    res.status(200).json({
      message: "Lấy danh sách thương hiệu thành công",
      data: brands,
      currentPage: parseInt(page, 10),
      totalPages: Math.ceil(totalBrands / pageSize),
      totalBrands,
    });
  }

  async getBrandById(req, res) {
    const brandId = req.params.id;
    const brand = await db.Brand.findByPk(brandId);
    if (!brand) {
      res.status(404).json({ message: "Thương hiệu không tìm thấy" });
    }
    res
      .status(200)
      .json({ message: "Lấy thành công ID thương hiệu", data: brand });
  }

  async insertBrand(req, res) {
    const brand = await db.Brand.create(req.body);
    res.status(201).json({ message: "Thêm brand thành công", data: brand });
  }

  async deleteBrand(req, res) {
    const { id } = req.params;
    const deleted = await db.Brand.destroy({ where: { id } });
    if (!deleted) {
      res.status(404).json({ message: "Brand không tìm thấy" });
    }
    res.status(200).json({ message: "Xoá thành công" });
  }

  async updateBrand(req, res) {
    const { id } = req.params;
    const updateBrand = await db.Brand.update(req.body, {
      where: { id },
    });
    if (!updateBrand) {
      res.status(404).json({ message: "Brand không tìm thấy" });
    }
    res.status(200).json({ message: "Sửa thành công" });
  }
}

module.exports = new BrandController();
