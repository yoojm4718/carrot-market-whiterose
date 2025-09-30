import { DataTypes, Model } from "sequelize";

class User extends Model {}

const initUser = (sequelize) => {
  User.init(
    {
      nickname: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      phoneNumber: DataTypes.STRING,
    },
    { sequelize, timestamps: true }
  );
};

export { initUser };
export default User;
