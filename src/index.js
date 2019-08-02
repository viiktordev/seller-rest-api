const express = require('express');
const http = require('http');
const funcionarioRoute = require('./route/funcionario');

const port = 3000;
const host = 'localhost';

const app = express();

app.use(express.json());

app.use('/', funcionarioRoute);

app.use((req, resp, next) => {
    resp.status(404).send();
});

app.use((error, req, resp, next) => {
    resp.status(500).json({error});
});

app.set('port', port);

const server = http.createServer(app);

server.listen(port,host);