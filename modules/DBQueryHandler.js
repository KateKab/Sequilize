const { Sequelize, DataTypes, Model } = require("sequelize");

const sequelize = new Sequelize("NodeTest", "sa", "322223", {
  dialect: "mssql",
  host: "COMPUTER",
  port: "50158",
});

module.exports.selectTop = function (table, searchString) {
  return sequelize.query(
    `SELECT TOP 20 * FROM ${table} where id like '%${searchString}%' or description like '%${searchString}%' ORDER BY Name ASC`
  );
};

module.exports.countItems = function (table, searchString) {
  return sequelize.query(
    `SELECT COUNT(id) FROM ${table} where name like '%${searchString}%' or description like '%${searchString}%'`
  );
};
