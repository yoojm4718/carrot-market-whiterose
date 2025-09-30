import { DataTypes, Model } from "sequelize";

class Promise extends Model {}

const initPromise = (sequelize) => {
  Promise.init(
    {
      when: DataTypes.DATE,
      location: DataTypes.STRING,
    },
    { sequelize, timestamps: true }
  );
};

export { initPromise };
export default Promise;
