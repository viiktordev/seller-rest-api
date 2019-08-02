const Funcionario = require('../model/funcionario.js');

exports.buscar = (req, res, next) => {
    const id = req.params.id;

    Funcionario.findByPk(id)
        .then(funcionario => {
            (funcionario) ? res.send(funcionario) : res.status(400).send;
        })
        .catch(error => next(error));
}

exports.criar = (req, res, next) => {
    const nome = req.body.nome;
    const email = req.body.email;
    const senha = req.body.senha;
    const celular = req.body.celular;

    Funcionario.create({
        nome: nome,
        email: email,
        senha: senha,
        celular: celular
    }).then((funcionario) => {
        res.status(201).send(funcionario);
    }).catch((error) => next(error));
}