const joi = require("joi");

class insertOrderRequest {
  constructor(data) {
    this.user_id = data.user_id;
    this.status = data.status;
    this.note = data.note;
    this.total = data.total;
  }
  static validate(data) {
    const schema = joi.object({
      user_id: joi.number().integer().required(),
      status: joi.number().integer().min(1).required(),
      note: joi.string().optional().allow(""),
      total: joi.number().integer().min(0).required(),
    });
    return schema.validate(data);
  }
}

export default insertOrderRequest;
