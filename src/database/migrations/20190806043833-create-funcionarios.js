'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
   return queryInterface.createTable('Funcionario', {
     id: {
       type: Sequelize.INTEGER,
       primaryKey: true,
       autoIncrement: true,
       allowNull: false
     },
     nome: {
      type: Sequelize.STRING,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false
    },
    celular: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false
    },
    password_hash: {
      type: Sequelize.STRING,
      allowNull: false
    }
   });
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
   return queryInterface.dropTable('funcionario');
  }
};
