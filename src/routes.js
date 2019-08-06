const routes = require('express').Router();
const {Funcionario} = require('./app/models');

Funcionario.create({nome: 'Victor', email: 'v1sscardoso@gmail.com', celular:'11972820922', password_hash:'kasdhsjkahd'});


module.exports = routes;