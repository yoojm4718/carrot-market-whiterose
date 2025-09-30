import { DataTypes, Model } from "sequelize";

class Review extends Model {}

const initReview = (sequelize) => {
  Review.init(
    {
      rating: DataTypes.INTEGER,
      content: DataTypes.TEXT,
    },
    {
      sequelize,
      timestamps: true,
    }
  );
};

export { initReview };
export default Review;
