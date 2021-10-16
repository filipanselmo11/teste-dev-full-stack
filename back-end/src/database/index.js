const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Colaborador = require('../models/Colaborador');

const connection = new Sequelize(dbConfig);

Colaborador.init(connection);

module.exports = connection;