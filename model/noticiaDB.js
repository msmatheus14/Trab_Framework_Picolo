const Sequelize = require('sequelize')
const database = require('../db')

const Noticia = database.define ('noticias', 

    {

    id: {

      type: Sequelize.INTEGER,
      autoIncrement: true,  
      primaryKey: true,

    },

    titulo: {

      type: Sequelize.STRING(255), 
      allowNull: false,

    },

    local: {

      type: Sequelize.STRING(100),
      allowNull: true,

    },
    autor: {

      type: Sequelize.STRING(100),
      allowNull: true,

    },
    descricao: {

      type: Sequelize.TEXT,
      allowNull: true,

    },
    data: {

      type: Sequelize.DATEONLY,
      allowNull: false,

    },
    categoria: {

      type: Sequelize.STRING(100),
      allowNull: true,   

    },
  })
 
module.exports = Noticia