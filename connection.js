const Sequelize = require('sequelize');

const sequelize = new Sequelize('RouteManage', 'pun', 'p@ssword', {
  dialect: 'mssql',
  host: 'LIGHT',
});

exports.connect = function(req, res) {
  sequelize
    .authenticate()
    .then(() => {
      console.log('Connection has been established successfully.');
    })
    .catch(err => {
      console.error('Unable to connect to the database:', err);
    });
};
