import Sequelize from "sequelize";
import config from "../config/config.json" with { type: "json" };
import Category, { initCategory } from "../../categories/models/categories.model";
import Item, { initItem } from "../../items/models/items.model";
import Like, { initLike } from "../../items/models/likes.model";
import Promise, { initPromise } from "../../promises/models/promises.model";
import Review, { initReview } from "../../reviews/models/reviews.model";
import User, { initUser } from "../../users/models/users.model";

const env = process.env.NODE_ENV || "development";
const currentConfig = config[env];
const sequelize = new Sequelize(
  currentConfig.database,
  currentConfig.username,
  currentConfig.password,
  currentConfig
);

initCategory(sequelize);
initItem(sequelize);
initLike(sequelize);
initPromise(sequelize);
initReview(sequelize);
initUser(sequelize);

User.belongsToMany(Item, { through: Like });
Item.belongsToMany(User, { through: Like });

User.hasMany(Review, {
  foreignKey: "reviewer_id"
})
Review.belongsTo(User, {
  foreignKey: "reviewer_id"
});

User.hasMany(Review, {
  foreignKey: "target_id"
})
Review.belongsTo(User, {
  foreignKey: "target_id"
});

User.hasMany(Promise, {
  foreignKey: "seller_id"
})
Promise.belongsTo(User, {foreignKey: "seller_id"});

User.hasMany(Promise, {
  foreignKey: "buyer_id"
})
Promise.belongsTo(User, {foreignKey: "buyer_id"});

User.hasMany(Item, {
  foreignKey: "seller_id"
})
Item.belongsTo(User, {
  foreignKey: "seller_id"
});

User.hasMany(Item, {
  foreignKey: "buyer_id"
})
Item.belongsTo(User), {
  foreignKey: "buyer_id"
};

Category.hasMany(Item);
Item.belongsTo(Category);

export default sequelize;