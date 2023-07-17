const express = require('express');
const routes = express.Router();
const Task = require('../controllers/crudControler.js');


routes.get('/', (req,res)=>{
    res.render("index",{
        title: "Inicio"
    });
})
routes.post('/',Task.create);

module.exports = routes;