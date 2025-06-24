const Sequelize = require("sequelize");
const db = require("../models/index");
const { Op } = Sequelize;

class NewsController {
  // Lấy danh sách tin tức (search + phân trang)
  async getNews(req, res) {
    const { search = "", page = 1 } = req.query;
    const pageSize = 5;
    const offset = (page - 1) * pageSize;

    let whereClause = {};
    if (search.trim() !== "") {
      whereClause = {
        [Op.or]: [
          {
            title: { [Op.like]: `%${search}%` }, // tìm theo tiêu đề
          },
          {
            content: { [Op.like]: `%${search}%` }, // tìm theo tiêu đề
          },
        ],
      };
    }

    const [newsList, totalNews] = await Promise.all([
      db.News.findAll({
        where: whereClause,
        limit: pageSize,
        offset: offset,
        order: [["createdAt", "DESC"]],
      }),
      db.News.count({ where: whereClause }),
    ]);

    res.status(200).json({
      message: "Lấy danh sách tin tức thành công",
      data: newsList,
      currentPage: parseInt(page, 10),
      totalPages: Math.ceil(totalNews / pageSize),
      totalNews,
    });
  }

  // Lấy tin tức theo ID
  async getNewsById(req, res) {
    const newsId = req.params.id;
    const news = await db.News.findByPk(newsId);

    if (!news) {
      return res.status(404).json({ message: "Không tìm thấy tin tức" });
    }

    res.status(200).json({ message: "Lấy tin tức thành công", data: news });
  }

  // Thêm mới tin tức
  async insertNews(req, res) {
    const transaction = await db.sequelize.transaction();

    try {
      // 1. Tạo tin tức
      const news = await db.News.create(req.body, { transaction });

      // 2. Lấy danh sách product_ids từ body
      let { product_ids = [] } = req.body;

      if (product_ids.length) {
        // 3. Truy vấn danh sách product tồn tại
        const existingProducts = await db.Product.findAll({
          where: {
            id: product_ids,
          },
          transaction,
        });

        // 4. Lấy danh sách id hợp lệ
        const validProductIds = existingProducts.map((p) => p.id);

        // 5. Lọc bỏ các ID không hợp lệ
        const validNewsDetails = validProductIds.map((product_id) => ({
          product_id,
          news_id: news.id,
        }));

        // 6. Tạo bản ghi News_detail
        await db.News_detail.bulkCreate(validNewsDetails, { transaction });
      }

      // 7. Commit transaction
      await transaction.commit();

      res.status(201).json({
        message: "Thêm tin tức thành công",
        data: news,
      });
    } catch (err) {
      // 8. Rollback nếu có lỗi
      await transaction.rollback();
      res.status(500).json({
        message: "Lỗi khi thêm tin tức",
        error: err.message,
      });
    }
  }

  // Cập nhật tin tức
  async updateNews(req, res) {
    const { id } = req.params;
    const updatedRows = await db.News.update(req.body, {
      where: { id },
    });

    if (updatedRows === 0) {
      return res
        .status(404)
        .json({ message: "Không tìm thấy tin tức để cập nhật" });
    }

    res.status(200).json({ message: "Cập nhật tin tức thành công" });
  }

  // Xoá tin tức
  async deleteNews(req, res) {
    const { id } = req.params;
    const deleted = await db.News.destroy({ where: { id } });

    if (!deleted) {
      return res.status(404).json({ message: "Không tìm thấy tin tức để xoá" });
    }

    res.status(200).json({ message: "Xoá tin tức thành công" });
  }
}

module.exports = new NewsController();
