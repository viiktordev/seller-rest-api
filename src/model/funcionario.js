const Sequelize = require('sequelize');
const sequelize = require('../infra/database/connection.js');

const Funcionario = sequelize.define('Funcionario',{
    id: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
    },
    nome: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    senha: {
        type: Sequelize.STRING
    },
    celular: {
        type: Sequelize.STRING
    }
},{
    freezeTableName:true,
    timestamps: false
});

module.exports = Funcionario;