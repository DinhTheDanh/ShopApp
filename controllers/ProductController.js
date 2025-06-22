const Sequelize = require("sequelize");
const { Op } = Sequelize;
const db = require("../models/index");
class ProductController {
  async getProducts(req, res) {
    //search and paging
    const { search = "", page = 1 } = req.query;
    const pageSize = 5;
    const offset = (page - 1) * pageSize;
    let whereClause = {};
    if (search.trim() !== "") {
      whereClause = {
        [Op.or]: [
          { name: { [Op.like]: `%${search}%` } },
          { description: { [Op.like]: `%${search}%` } },
          { specification: { [Op.like]: `%${search}%` } },
        ],
      };
    }
    const [products, totalProducts] = await Promise.all([
      db.Product.findAll({
        where: whereClause,
        limit: pageSize,
        offset: offset,
      }),
      db.Product.count({
        where: whereClause,
      }),
    ]);

    res.status(200).json({
      message: "Lấy danh sách sản phẩm thành công",
      data: products,
      currentPage: parseInt(page, 10),
      totalPages: Math.ceil(totalProducts / pageSize),
      totalProducts,
    });
  }
  async getProductById(req, res) {
    const productId = req.params.id;
    const product = await db.Product.findByPk(productId);
    if (!product) {
      res.status(404).json({ message: "Sản phẩm không tìm thấy" });
    }
    res
      .status(200)
      .json({ message: "Lấy thành công ID sản phẩm", data: product });
  }
  async insertProduct(req, res) {
    const product = await db.Product.create(req.body);
    res.status(201).json({ message: "Thêm mới thành công", data: product });
  }
  async deleteProduct(req, res) {
    res.status(200).json({ message: "Xoá thành công" });
  }
  async updateProduct(req, res) {
    res.status(200).json({ message: "Sửa thành công" });
  }
}

module.exports = new ProductController();
