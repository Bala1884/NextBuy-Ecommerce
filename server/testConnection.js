import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('ecommerce_db', 'postgres', 'Postgres123', {
  host: 'localhost',
  port: 5432,
  dialect: 'postgres',
  // Optional logging
  // logging: console.log
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Database connection has been established successfully.');
  } catch (error) {
    console.error('❌ Unable to connect to the database:', error.message);
  }
})();
