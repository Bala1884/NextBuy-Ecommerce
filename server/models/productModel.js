export default (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    image: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false
    },
    subcategory: {
      type: DataTypes.STRING,
      allowNull: false
    },
    sizes: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false
    },
    bestseller: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    date: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  });

  return Product;
};
