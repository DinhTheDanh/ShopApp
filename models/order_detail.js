"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order_detail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Order_detail.belongsTo(models.Order, {
        foreignKey: "order_id",
      });
      Order_detail.belongsTo(models.Product, {
        foreignKey: "product_id",
      });
    }
  }
  Order_detail.init(
    {
      product_id: DataTypes.INTEGER,
      order_id: DataTypes.INTEGER,
      price: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Order_detail",
      tableName: "order_details",
      underscored: true,
    }
  );
  return Order_detail;
};
