const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../db");

const Account = sequelize.define("Account", {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Account;
