class OrderController {
  async getOrder(req, res) {
    res.status(200).json({ message: "Lấy danh sách order thành công" });
  }

  async getOrderById(req, res) {
    res.status(200).json({ message: "Lấy order theo ID thành công" });
  }

  async insertOrder(req, res) {
    res.status(200).json({ message: "Thêm order thành công" });
  }

  async deleteOrder(req, res) {
    res.status(200).json({ message: "Xoá order thành công" });
  }

  async updateOrder(req, res) {
    res.status(200).json({ message: "Cập nhật order thành công" });
  }
}

module.exports = new OrderController();
