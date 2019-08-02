const express = require('express');
const service = require('../service/funcionario.js')

const router = express.Router();

router.get('/funcionario/:id', service.buscar);

router.post('/funcionario', service.criar);

module.exports = router;