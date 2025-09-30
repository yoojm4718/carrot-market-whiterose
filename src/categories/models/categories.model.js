import { DataTypes, Model } from "sequelize";

class Category extends Model {}

const initCategory = (sequelize) => {
  Category.init(
    { title: DataTypes.STRING },
    {
      sequelize,
      timestamps: true,
    }
  );
};

export { initCategory };
export default Category;
