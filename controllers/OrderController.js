const Sequelize = require("sequelize");
const db = require("../models/index");
const { Op } = Sequelize;

class OrderController {
  // GET /orders?search=...&page=1
  async getOrders(req, res) {
    try {
      const { search = "", page = 1 } = req.query;
      const pageSize = 5;
      const offset = (page - 1) * pageSize;

      let whereClause = {};
      if (search.trim() !== "") {
        whereClause = {
          [Op.or]: [
            { customerName: { [Op.like]: `%${search}%` } },
            { status: { [Op.like]: `%${search}%` } },
          ],
        };
      }

      const [orders, totalOrders] = await Promise.all([
        db.Order.findAll({
          where: whereClause,
          limit: pageSize,
          offset: offset,
        }),
        db.Order.count({ where: whereClause }),
      ]);

      res.status(200).json({
        message: "Lấy danh sách đơn hàng thành công",
        data: orders,
        currentPage: parseInt(page, 10),
        totalPages: Math.ceil(totalOrders / pageSize),
        totalOrders,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Lỗi khi lấy danh sách đơn hàng" });
    }
  }

  // GET /orders/:id
  async getOrderById(req, res) {
    try {
      const { id } = req.params;
      const order = await db.Order.findByPk(id);

      if (!order) {
        return res.status(404).json({ message: "Đơn hàng không tồn tại" });
      }

      res
        .status(200)
        .json({ message: "Lấy đơn hàng theo ID thành công", data: order });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Lỗi khi lấy đơn hàng" });
    }
  }

  // POST /orders
  async insertOrder(req, res) {
    const userExists = await db.User.findByPk(req.body.user_id);
    if (!userExists) {
      return res.status(404).json({ message: "Người dùng không tồn tại" });
    }
    const order = await db.Order.create(req.body);
    if (order) {
      res.status(201).json({ message: "Tạo đơn hàng thành công", data: order });
    } else {
      res.status(404).json({ message: "Không tạo được đơn hàng" });
    }
  }

  // PUT /orders/:id
  async updateOrder(req, res) {
    try {
      const { id } = req.params;
      const [updated] = await db.Order.update(req.body, { where: { id } });

      if (updated === 0) {
        return res.status(404).json({ message: "Đơn hàng không tồn tại" });
      }

      res.status(200).json({ message: "Cập nhật đơn hàng thành công" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Lỗi khi cập nhật đơn hàng" });
    }
  }

  // DELETE /orders/:id
  async deleteOrder(req, res) {
    try {
      const { id } = req.params;
      const deleted = await db.Order.destroy({ where: { id } });

      if (!deleted) {
        return res.status(404).json({ message: "Đơn hàng không tồn tại" });
      }

      res.status(200).json({ message: "Xoá đơn hàng thành công" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Lỗi khi xoá đơn hàng" });
    }
  }
}

module.exports = new OrderController();
