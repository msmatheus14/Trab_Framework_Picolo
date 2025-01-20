const Sequelize = require('sequelize')
const database = require('../db')
const NoticiaObserver = require('../observers/noticiaObserver')

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
    tipo: {

      type: Sequelize.INTEGER,
      allowNull: true,

    },
  })

  Noticia.addHook('afterCreate', (noticia, options) => {
    NoticiaObserver.onNoticiaCriada(noticia);
  });
  
  Noticia.addHook('afterDestroy', (noticia, options) => {
    NoticiaObserver.onNoticiaExcluida(noticia);
  });
 
module.exports = Noticia  