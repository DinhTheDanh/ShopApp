"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class News_detail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      News_detail.belongsTo(models.Product, {
        foreignKey: "product_id",
      });
      News_detail.belongsTo(models.News, {
        foreignKey: "news_id",
      });
    }
  }
  News_detail.init(
    {
      product_id: DataTypes.INTEGER,
      news_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "News_detail",
      tableName: "news_details",
      underscored: true,
    }
  );
  return News_detail;
};
