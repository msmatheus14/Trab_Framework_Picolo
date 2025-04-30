const { Sequelize} = require('sequelize')
const mongoose = require('mongoose')

const database = require('../../db')
const Noticia = require('../DB/noticiaDB') 

const comentarioSchema = new mongoose.Schema ({
    id: {
        type: String,
        required: true,
        unique: true
    },

    data: {
        type: String,
        required: true,
    },

    autor: {
        type: String,
        required: true,

    },
    comentario: {
        type: String,
        required: true,
    },

    idNoticia: {
        type: String,
        required: true
    }
    
})

const Comentario = database.define('Comentarios', {

    id: {

        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true, 
    },
    data: {

        type: Sequelize.DATEONLY,
        allowNull: false,
    },
    autor: {

        type: Sequelize.STRING,
        allowNull: false,
    },
    comentario: {

        type: Sequelize.TEXT,
        allowNull: false,
    },
    idNoticia: {

        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: Noticia,  
            key: 'id',       
        },

        onDelete: 'CASCADE',  
    },
    
}, {
    tableName: 'comentarios',  
    timestamps: true,          
})


Comentario.belongsTo(Noticia, {

    foreignKey: 'idNoticia',  
    onDelete: 'CASCADE',     
})

const comentarioMongoose = new mongoose.model ('comentario', comentarioSchema)

module.exports = Comentario, comentarioMongoose
