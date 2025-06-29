const Joi = require("joi");

class updateNewRequest {
  constructor(data) {
    this.title = data.title;
    this.image = data.image || null;
    this.content = data.content || "";
  }

  static validate(data) {
    const schema = Joi.object({
      title: Joi.string().optional().allow(""), // nếu có thì phải là string, cho phép ""
      image: Joi.string().uri().optional().allow(null, ""), // cho phép rỗng hoặc null
      content: Joi.string().optional().allow(""), // cho phép thiếu
    });

    return schema.validate(data, { abortEarly: false });
  }
}

module.exports = updateNewRequest;
