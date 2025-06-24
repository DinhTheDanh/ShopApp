const joi = require("joi");

class updateProductRequest {
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
      name: joi.string().allow(null, "").optional(),
      price: joi.number().positive().allow(null).optional(),
      oldprice: joi.number().positive().allow(null).optional(),
      image: joi.string().uri().allow(null, "").optional(),
      description: joi.string().allow(null, "").optional(),
      specification: joi.string().allow(null, "").optional(),
      buyturn: joi.number().integer().min(0).allow(null).optional(),
      quantity: joi.number().integer().min(0).allow(null).optional(),
      brand_id: joi.number().integer().allow(null).optional(),
      category_id: joi.number().integer().allow(null).optional(),
    });

    return schema.validate(data);
  }
}

export default updateProductRequest;
