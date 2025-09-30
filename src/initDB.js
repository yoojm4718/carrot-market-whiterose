import sequelize from "./global/models";

async function initDB() {
  try {
    await sequelize.sync({ force: false, alter: true });
    console.log("database connected");
  } catch (err) {
    console.error(err);
  }
}

export default initDB;
