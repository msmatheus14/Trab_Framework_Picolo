
const Sequelize = require('sequelize');
const database = require('../../db');

const mongoose = require('mongoose')

const logSchema = new mongoose.Schema({

  id: {
    type: Number,
    required: true,
    unique: true
  },

  descrisao: {
    type: String,
    required: true
  },

  tipo: {
    type: String,
    required: true
  }, 

  data: {
    type: String,
    required: true
  }

})

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

const logMongoose = mongoose.model('log', logSchema)

module.exports = Log, logMongoose
