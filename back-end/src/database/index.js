const Sequelize = require('sequelize');
const dbConfig = require('../config/database');


const connection = new Sequelize(dbConfig);

const Colaborador = require('../database/models/Colaborador');

Colaborador.init(connection);

module.exports = connection;