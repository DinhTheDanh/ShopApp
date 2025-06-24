const Sequelize = require("sequelize");
const db = require("../models/index");
const { Op } = Sequelize;

class NewsDetailController {
  // GET /news-details?search=...&page=1
  async getNewsDetails(req, res) {
    const { search = "", page = 1 } = req.query;
    const pageSize = 5;
    const offset = (page - 1) * pageSize;

    let whereClause = {};
    if (search.trim() !== "") {
      whereClause = {
        [Op.or]: [
          { productName: { [Op.like]: `%${search}%` } }, // tuỳ schema
          // { newsId: { [Op.like]: `%${search}%` } }, // nếu muốn
        ],
      };
    }

    const [details, totalDetails] = await Promise.all([
      db.News_detail.findAll({
        where: whereClause,
        limit: pageSize,
        offset,
      }),
      db.News_detail.count({ where: whereClause }),
    ]);

    res.status(200).json({
      message: "Lấy danh sách chi tiết tin tức thành công",
      data: details,
      currentPage: parseInt(page, 10),
      totalPages: Math.ceil(totalDetails / pageSize),
      totalDetails,
    });
  }

  // GET /news-details/:id
  async getNewsDetailById(req, res) {
    const { id } = req.params;
    const detail = await db.News_detail.findByPk(id);

    if (!detail) {
      return res
        .status(404)
        .json({ message: "Chi tiết tin tức không tồn tại" });
    }

    res.status(200).json({
      message: "Lấy chi tiết tin tức thành công",
      data: detail,
    });
  }
  // PUT /news-details/:id
  async updateNewsDetail(req, res) {
    const { id } = req.params;
    const [updated] = await db.News_detail.update(req.body, {
      where: { id },
    });

    if (updated === 0) {
      return res
        .status(404)
        .json({ message: "Chi tiết tin tức không tồn tại" });
    }

    res.status(200).json({ message: "Cập nhật chi tiết tin tức thành công" });
  }

  // DELETE /news-details/:id
  async deleteNewsDetail(req, res) {
    const { id } = req.params;
    const deleted = await db.News_detail.destroy({ where: { id } });

    if (!deleted) {
      return res
        .status(404)
        .json({ message: "Chi tiết tin tức không tồn tại" });
    }

    res.status(200).json({ message: "Xoá chi tiết tin tức thành công" });
  }
}

module.exports = new NewsDetailController();
