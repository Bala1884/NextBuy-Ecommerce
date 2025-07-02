export default (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    userId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    items: {
      type: DataTypes.JSONB,
      allowNull: false
    },
    amount: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    address: {
      type: DataTypes.JSONB,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'Order Placed'
    },
    paymentMethod: {
      type: DataTypes.STRING,
      allowNull: false
    },
    payment: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    date: {
      type: DataTypes.BIGINT, // Unix timestamp
      allowNull: false
    }
  });

  return Order;
};
