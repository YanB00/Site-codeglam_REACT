const Sequelize = require('sequelize');

const connection = require('../database/database');

const modelRegister = connection.define(
    'tbl_registers',
    {
        id_salao: {
            type: Sequelize.DataTypes.INTEGER, 
            primaryKey: true,
            autoIncrement: true,
            field: 'id_salao'
        },
        nome: {
            type: Sequelize.DataTypes.STRING(100), 
            allowNull: false,
            field: 'nome'
        },
        empresa: {
            type: Sequelize.DataTypes.STRING(100), 
            allowNull: false,
            field: 'empresa'
        },
        telefone: {
            type: Sequelize.DataTypes.STRING(20), 
            allowNull: true,
            field: 'telefone'
        },
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
    }
);


//modelRegister.sync({force:true});

module.exports = modelRegister;