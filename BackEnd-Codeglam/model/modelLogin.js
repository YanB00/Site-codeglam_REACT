const Sequelize = require('sequelize');
const connection = require('../database/database');

const modelLogin = connection.define(
    'tbl_registers', 
    {
        email: {
            type: Sequelize.DataTypes.STRING(100),
            allowNull: false,
            field: 'email' 
        },
        senha: {
            type: Sequelize.DataTypes.STRING(255),
            allowNull: false,
            field: 'senha'
        }
    },
    {
        tableName: 'tbl_registers', 
        timestamps: false 
    }
);

module.exports = modelLogin;