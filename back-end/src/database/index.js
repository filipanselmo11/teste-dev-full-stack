const Sequelize = require('sequelize');
const dbConfig = require('../config/database');


const connection = new Sequelize(dbConfig);

const Colaborador = require('../database/models/Colaborador');


const Setor = require('../database/models/Setor');


Colaborador.init(connection);

Setor.init(connection);

Colaborador.associate(connection.models)

module.exports = connection;