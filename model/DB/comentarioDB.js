const { Sequelize} = require('sequelize')

const database = require('../../db')
const Noticia = require('../DB/noticiaDB') 

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



module.exports = Comentario 
