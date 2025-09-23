import { Model, DataTypes } from "sequelize";

class Item extends Model {}

const initItem = (sequelize) =>
  Item.init(
    {
      title: DataTypes.STRING,
      imageUrl: DataTypes.STRING,
      content: DataTypes.TEXT,
      location: DataTypes.STRING,
      price: DataTypes.INTEGER,
      status: DataTypes.ENUM,
      refreshedAt: DataTypes.DATE,
    },
    {
      sequelize,
      timestamps: true,
    }
  );

export { initItem };
export default Item;
