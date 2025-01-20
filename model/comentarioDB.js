const { Sequelize} = require('sequelize');
const database = require('../db');
const Noticia = require('./noticiaDB');  // Importando o modelo 'Noticia' para referência

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
            model: Noticia,  // Relacionando com a tabela 'noticias'
            key: 'id',       // Chave primária da tabela 'noticias'
        },
        onDelete: 'CASCADE',  // Quando uma notícia for deletada, os comentários relacionados também serão
    },
}, {
    tableName: 'comentarios',  // Especificando o nome da tabela
    timestamps: true,          // Incluindo timestamps de criação e atualização, se necessário
});

// Definindo a associação entre 'Comentario' e 'Noticia'
Comentario.belongsTo(Noticia, {
    foreignKey: 'idNoticia',  // A chave estrangeira que relaciona 'Comentario' com 'Noticia'
    onDelete: 'CASCADE',      // Se a notícia for deletada, os comentários relacionados também serão deletados
});

module.exports = Comentario;
