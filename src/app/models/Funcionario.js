module.exports = (sequelize, DataTypes) => {
    const Funcionario = sequelize.define('Funcionario', {
        nome: DataTypes.STRING,
        email: DataTypes.STRING,
        celular: DataTypes.STRING,
        password_hash: DataTypes.STRING
    });

    return Funcionario;
};