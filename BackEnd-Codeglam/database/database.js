const Sequelize = require('sequelize');

const connection = new Sequelize(
    'codeglam',
    'root',
    'Furia@37',
    {
        host: 'localhost',
        port: '3306',
        dialect: 'mysql',
        timezone: '-03:00'
    }
);

module.exports = connection;