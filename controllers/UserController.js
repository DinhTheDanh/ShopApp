const Sequelize = require("sequelize");
const { Op } = Sequelize;
const db = require("../models/index");
const UserResponse = require("../dtos/response/user/userResponse");
const InsertUserRequest = require("../dtos/request/users/insertUserRequest");

class UserController {
  // Thêm mới người dùng
  async insertUser(req, res) {
    const { email } = req.body;

    // Check email đã tồn tại chưa
    const existingUser = await db.User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(409).json({ message: "Email đã được sử dụng" });
    }

    // Tạo request object và mã hoá mật khẩu
    const request = new InsertUserRequest(req.body);
    await request.encryptPassword();

    // Tạo user
    const newUser = await db.User.create(request);

    if (newUser) {
      res.status(201).json({
        message: "Thêm người dùng thành công",
        data: new UserResponse(newUser),
      });
    } else {
      res.status(500).json({ message: "Không thể thêm người dùng" });
    }
  }

  // Cập nhật người dùng
  async updateUser(req, res) {
    const { id } = req.params;
    const updatedRows = await db.User.update(req.body, {
      where: { id },
    });

    if (updatedRows === 0) {
      return res
        .status(404)
        .json({ message: "Không tìm thấy người dùng để cập nhật" });
    }

    const updatedUser = await db.User.findByPk(id);
    res
      .status(200)
      .json({ message: "Cập nhật người dùng thành công", data: updatedUser });
  }
}

module.exports = new UserController();
