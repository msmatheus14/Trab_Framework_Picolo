// models/Log.js
const Sequelize = require('sequelize');
const database = require('../db');

const Log = database.define('logs', {

  id: {

    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,

  },
  descricao: {

    type: Sequelize.STRING(255),
    allowNull: false,

  },
  tipo: {

    type: Sequelize.STRING(50),
    allowNull: false, 
  },

  data: {

    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
  },
  
});

Log.sync({ alter: true });

module.exports = Log;
