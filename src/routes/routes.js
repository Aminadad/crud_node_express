const express = require('express');
const routes = express.Router();
const taskControl = require('../controllers/crudControler.js');


routes.post('/',taskControl.create);
routes.get('/', taskControl.read);
routes.get('/:id', taskControl.readOne);
routes.get('/articulo/:id', taskControl.deletes);
routes.post('/:id', taskControl.update);

module.exports = routes;