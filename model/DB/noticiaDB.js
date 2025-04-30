const Sequelize = require('sequelize')
const database = require('../../db')
const NoticiaObserver = require('../../observers/noticiaObserver')

const mongoose = require('mongoose')

const noticiaSchema = new mongoose.Schema({

  id:{
    type: Number,
    
  },
  titulo: {
    type: String,
   
  },
  local: {
    type: String,
    

  },
  autor: {
    type: String,
    
  },
  data: {
    type: String,
    
  },
  categoria: {
    type: String,
    
  },
  tipo: {
    type: Number,
    
  }
})

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

  Noticia.addHook('afterCreate', (noticia) => {
    NoticiaObserver.onNoticiaCriada(noticia);
  })
  
  Noticia.addHook('afterDestroy', (noticia) => {
    NoticiaObserver.onNoticiaExcluida(noticia);
  }) 

const noticiaMongoose = mongoose.model('noticia', noticiaSchema)
 
module.exports = Noticia, noticiaMongoose
