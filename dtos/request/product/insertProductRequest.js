const joi = require("joi");

class insertProductRequest {
  constructor(data) {
    this.name = data.name;
    this.price = data.price;
    this.oldprice = data.oldprice;
    this.image = data.image;
    this.description = data.description;
    this.specification = data.specification;
    this.buyturn = data.buyturn;
    this.quantity = data.quantity;
    this.brand_id = data.brand_id;
    this.category_id = data.category_id;
  }
  static validate(data) {
    const schema = joi.object({
      name: joi.string().required(),
      price: joi.number().positive().required(),
      oldprice: joi.number().positive(),
      image: joi.string().uri().allow(""),
      description: joi.string().optional(),
      specification: joi.string().required(),
      buyturn: joi.number().integer().min(0),
      quantity: joi.number().integer().min(0),
      brand_id: joi.number().integer().required(),
      category_id: joi.number().integer().required(),
    });
    return schema.validate(data);
  }
}

export default insertProductRequest;
