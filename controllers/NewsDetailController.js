const Sequelize = require("sequelize");
const db = require("../models/index");
const { Op } = Sequelize;

class NewsDetailController {
  // GET /news-details?search=...&page=1
  async getNewsDetails(req, res) {
    const { page = 1 } = req.query;
    const pageSize = 5;
    const offset = (page - 1) * pageSize;

    const [details, totalDetails] = await Promise.all([
      db.News_detail.findAll({
        limit: pageSize,
        offset,
        include: [{ model: db.News }, { model: db.Product }],
      }),
      db.News_detail.count(),
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
    const detail = await db.News_detail.findByPk(id, {
      include: [{ model: db.News }, { model: db.Product }],
    });

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
  // POST /insert-new_details
  async insertNewDetails(req, res) {
    const { product_id, news_id } = req.body;
    const existingProduct = await db.Product.findByPk(product_id);
    const existingNews = await db.News.findByPk(news_id);
    if (!existingProduct || !existingNews) {
      res.status(404).json({
        message: "Không tìm thấy sản phẩm hoặc tin tức",
      });
    }
    const existingNewsDetail = await db.News_detail.findOne({
      where: { product_id, news_id },
    });
    if (existingNewsDetail) {
      res.status(409).json({
        message: "Đã tồn tại cặp sản phảm và tin tức",
      });
    }
    const newDetail = await db.News_detail.create({ product_id, news_id });
    res.status(200).json({
      message: "Thêm mới chi tiết tin tức thành công",
      data: newDetail,
    });
  }
  // PUT /news-details/:id
  async updateNewsDetail(req, res) {
    const { id } = req.params;
    const { product_id, news_id } = req.body;

    const existingDuplicate = await db.News_detail.findOne({
      where: {
        product_id,
        news_id,
        id: { [Sequelize.Op.ne]: id },
      },
    });

    if (existingDuplicate) {
      return res.status(409).json({
        message:
          "Mối quan hệ giữa sản phẩm và tin tức đã tồn tại trong bản ghi",
      });
    }
    const updated = await db.News_detail.update(
      { product_id, news_id },
      {
        where: { id },
      }
    );

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
