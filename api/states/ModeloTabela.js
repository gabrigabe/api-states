const Sequelize = require('sequelize');
const instancia = require('../bd');

const colunas = {
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    regiao: {
        type: Sequelize.STRING,
        allowNull: false
    },
    populacao: {
        type: Sequelize.BIGINT,
        allowNull: false
    },
    capital: {
        type: Sequelize.STRING,
        allowNull: false
    },
    area: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
};

const opcoes = {
    freezeTableName: true,
    timestamps: false,
    tableName: 'estadosbrasil'
};

module.exports = instancia.define('estadosbrasil', colunas, opcoes);