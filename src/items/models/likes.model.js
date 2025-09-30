import { Model } from "sequelize";

class Like extends Model {}

const initLike = (sequelize) => {
  Like.init(
    {},
    {
      sequelize,
      timestamps: true,
    }
  );
};

export { initLike };
export default Like;
