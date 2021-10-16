const express = require('express');

const ColaboradorController = require('./controllers/ColaboradorController');

const routes = express.Router();

routes.post('/colaboradores', ColaboradorController.create);

routes.get('/colaboradores', ColaboradorController.index);

routes.get('/colaboradores/:id', ColaboradorController.findOne);

routes.put('/colaboradores/:id', ColaboradorController.update);

routes.delete('/colaboradores/:id', ColaboradorController.delete);

routes.delete('/colaboradores', ColaboradorController.deleteAll);

module.exports = routes;