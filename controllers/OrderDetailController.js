const Sequelize = require("sequelize");
const db = require("../models/index");
const { Op } = Sequelize;

class OrderDetailController {
  // GET /order-details?search=...&page=1
  async getOrderDetails(req, res) {
    try {
      const { search = "", page = 1 } = req.query;
      const pageSize = 5;
      const offset = (page - 1) * pageSize;

      let whereClause = {};
      if (search.trim() !== "") {
        whereClause = {
          [Op.or]: [
            { productName: { [Op.like]: `%${search}%` } }, // Nếu có productName
            // { orderId: { [Op.like]: `%${search}%` } }, // tuỳ schema bạn
          ],
        };
      }

      const [details, totalDetails] = await Promise.all([
        db.OrderDetail.findAll({
          where: whereClause,
          limit: pageSize,
          offset,
        }),
        db.OrderDetail.count({ where: whereClause }),
      ]);

      res.status(200).json({
        message: "Lấy danh sách chi tiết đơn hàng thành công",
        data: details,
        currentPage: parseInt(page, 10),
        totalPages: Math.ceil(totalDetails / pageSize),
        totalDetails,
      });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ message: "Lỗi khi lấy danh sách chi tiết đơn hàng" });
    }
  }

  // GET /order-details/:id
  async getOrderDetailById(req, res) {
    try {
      const { id } = req.params;
      const detail = await db.OrderDetail.findByPk(id);

      if (!detail) {
        return res
          .status(404)
          .json({ message: "Chi tiết đơn hàng không tồn tại" });
      }

      res.status(200).json({
        message: "Lấy chi tiết đơn hàng thành công",
        data: detail,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Lỗi khi lấy chi tiết đơn hàng" });
    }
  }

  // POST /order-details
  async insertOrderDetail(req, res) {
    try {
      const detail = await db.OrderDetail.create(req.body);
      res.status(201).json({
        message: "Thêm chi tiết đơn hàng thành công",
        data: detail,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Lỗi khi thêm chi tiết đơn hàng" });
    }
  }

  // PUT /order-details/:id
  async updateOrderDetail(req, res) {
    try {
      const { id } = req.params;
      const [updated] = await db.OrderDetail.update(req.body, {
        where: { id },
      });

      if (updated === 0) {
        return res
          .status(404)
          .json({ message: "Chi tiết đơn hàng không tồn tại" });
      }

      res
        .status(200)
        .json({ message: "Cập nhật chi tiết đơn hàng thành công" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Lỗi khi cập nhật chi tiết đơn hàng" });
    }
  }

  // DELETE /order-details/:id
  async deleteOrderDetail(req, res) {
    try {
      const { id } = req.params;
      const deleted = await db.OrderDetail.destroy({ where: { id } });

      if (!deleted) {
        return res
          .status(404)
          .json({ message: "Chi tiết đơn hàng không tồn tại" });
      }

      res.status(200).json({ message: "Xoá chi tiết đơn hàng thành công" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Lỗi khi xoá chi tiết đơn hàng" });
    }
  }
}

module.exports = new OrderDetailController();
