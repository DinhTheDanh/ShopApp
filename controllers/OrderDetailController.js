class OrderDetailController {
  async getOrderDetail(req, res) {
    res.status(200).json({ message: "Lấy danh sách order detail thành công" });
  }

  async getOrderDetailById(req, res) {
    res.status(200).json({ message: "Lấy order detail theo ID thành công" });
  }

  async insertOrderDetail(req, res) {
    res.status(200).json({ message: "Thêm order detail thành công" });
  }

  async deleteOrderDetail(req, res) {
    res.status(200).json({ message: "Xoá order detail thành công" });
  }

  async updateOrderDetail(req, res) {
    res.status(200).json({ message: "Cập nhật order detail thành công" });
  }
}

module.exports = new OrderDetailController();
