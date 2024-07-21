const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("tictactoe", "postgres", "password", {
  host: "localhost",
  dialect: "postgres",
});

const connectToDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

connectToDatabase();

module.exports = sequelize;
