let comentarios = [
    {
        id: 1,
        data: '2024-01-17T09:30:00',
        comentario: 'Excelente notícia, muito bem escrita!',
        autor: 'João Silva',
        idNoticia: 1
    },
    {
        id: 2,
        data: '2024-01-17T10:00:00',
        comentario: 'Concordo, a análise foi bem detalhada.',
        autor: 'Maria Oliveira',
        idNoticia: 1
    },
    {
        id: 3,
        data: '2024-01-17T10:30:00',
        comentario: 'Muito boa a cobertura, espero ver mais matérias como essa.',
        autor: 'Carlos Almeida',
        idNoticia: 1
    }
]


class Comentario {

    #id
    #data
    #comentario
    #autor
    #idNoticia

    constructor() {

        this.#id = null
        this.#data = null
        this.#comentario = null
        this.#autor = null
        this.#idNoticia = null

    }

    criarComentario(data, comentario, autor, idNoticia) {

        this.setId(this.definirProximoId())
        this.setData(data)
        this.setComentario(comentario)
        this.setAutor(autor)
        this.setIdNoticia(idNoticia)

        let obj = {
            
            id: this.getAutor(),
            data: this.getData(),
            comentario: this.getComentario(),  
            autor: this.getAutor(),
            idNoticia: this.getIdNoticia()
            
        }

        let array = this.getDados()
        array.push(obj)
        this.setDados(array)
    }

   
    definirProximoId() {
        const array = this.getDados()

        if (array.length === 0) {
            return 1
        } else {
            let ultimo = array[array.length - 1]
            return ultimo.id + 1
        }
    }

    // Métodos getters
    getId() {
        return this.#id
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

    // Métodos setters
    setId(id) {
        this.#id = id
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

    
    getDados() {
        return comentarios  
    }

   
    setDados(array) {
        comentarios = array  
    }

    
}

module.exports = { Comentario }
