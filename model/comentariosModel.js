const database = require('../db')
const comentarioDB = require('./DB/comentarioDB')

class Comentario {

    
    #data
    #comentario
    #autor
    #idNoticia

    constructor() {

        
        this.#data = null
        this.#comentario = null
        this.#autor = null
        this.#idNoticia = null

    }

    async criarComentario(data, comentario, autor, idNoticia) {

        
        this.setData(data)
        this.setComentario(comentario)
        this.setAutor(autor)
        this.setIdNoticia(idNoticia)

        try {
            await database.sync()


        let obj = await comentarioDB.create ({
            
            data: this.getData(),
            comentario: this.getComentario(),  
            autor: this.getAutor(),
            idNoticia: this.getIdNoticia()
            
        } )

        console.log('Comentário criado com sucesso:')

        } catch (error) {
            console.error('Erro ao criar comentário:')
        }

    }

    getData() {
        return this.#data
    }

    getComentario() {
        return this.#comentario
    }


    getAutor() {
        return this.#autor
    }

    
    setData(data) {
        this.#data = data
    }

    setComentario(comentario) {
        this.#comentario = comentario
    }



    setAutor(autor) {
        this.#autor = autor
    }

    setIdNoticia(idNoticia) {
        this.#idNoticia = idNoticia
    }

    getIdNoticia() {
        return this.#idNoticia
    }

    async retornarTodosComentarios() {

        try {
            await database.sync()
            const comentarios = await comentarioDB.findAll({
                attributes: ['id', 'data', 'comentario', 'autor', 'idNoticia']})
                console.log(comentarios)

                return comentarios
    }       
        catch (error) {
            console.log(error) 
            return null 
        }
    } 

    async excluirComentario(id) {
        
        try {
            await database.sync()
            await comentarioDB.destroy({
                where: {
                    id: id
                }
            })
        } catch (error) {
            console.log(error)
        }
    }   

    
}

module.exports = { Comentario }
