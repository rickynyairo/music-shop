module.exports = (sequelize, DataTypes) => {
  const ShoppingCart = sequelize.define(
    "ShoppingCart",
    {
      item_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      cart_id: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      album_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {
      timestamps: false,
      tableName: "shopping_cart"
    }
  );

  ShoppingCart.associate = ({ Album }) => {
    ShoppingCart.belongsTo(Album, {
      foreignKey: "album_id",
      onDelete: "CASCADE"
    });
  };

  return ShoppingCart;
};
