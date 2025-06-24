const Joi = require("joi");
const bcrypt = require("bcrypt");

class InsertUserRequest {
  constructor(data) {
    this.email = data.email;
    this.password = data.password; // ban đầu giữ plain text
    this.name = data.name;
    this.role = data.role;
    this.avatar = data.avatar || null;
    this.phone = data.phone || null;
  }

  static validate(data) {
    const schema = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().min(6).required(),
      name: Joi.string().required(),
      role: Joi.number().integer().min(1).required(),
      avatar: Joi.string().uri().optional().allow(""),
      phone: Joi.string()
        .pattern(/^[0-9]{10,15}$/)
        .optional()
        .allow(""),
    });

    return schema.validate(data);
  }

  async encryptPassword() {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
}

module.exports = InsertUserRequest;
