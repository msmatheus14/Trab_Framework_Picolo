
class Categorias {

    constructor(){

        this.nome = null
        this.descricao = null
    
    if(new.target == "categoria"){

        throw new Error("Classe abstrata, nao pode ser instanciada.");
    }

    }

}

class CategoriaEsporte extends Categorias {

    #nome
    #descricao

    constructor(nome, descricao){
        super()

        this.#nome = nome
        this.#descricao = descricao

        const categoria = this.criarCategoria(this.#nome, this.#descricao)

        return categoria
    }

    criarCategoria(nome, descricao){

        let obj = {

            nome:this.#nome,
            descricao:this.#descricao
        }

        return obj
    }
}

class CategoriaPolitica extends Categorias {

    #nome
    #descricao

    constructor(nome, descricao){
        super()

        this.#nome = nome
        this.#descricao = descricao

        const categoria = this.criarCategoria(this.#nome, this.#descricao)
        return categoria

    }

    criarCategoria(nome, descricao){

        let obj = {
            nome:nome,
            descricao:descricao
        }


        return obj

    }
        
}

class CategoriaPolicial extends Categorias {

    #nome
    #descricao

    constructor(nome, descricao){
        super()

        this.#nome = nome
        this.#descricao = descricao

        const categoria = this.criarCategoria(this.#nome, this.#descricao)

        return categoria
        
    }    

    criarCategoria(nome, descricao){

        let obj = {

            nome:this.#nome,
            descricao:this.#descricao
        }

        return obj
    }
}

    class MetodoFabricaCategorias {

     criarCategoria(tipo){

        console.log(tipo)

        if(tipo.toUpperCase() == 'ESPORTES'){
            return new CategoriaEsporte('Esportes', 'Noticias sobre esportes')
        }
        if(tipo.toUpperCase() == 'POLITICA'){
            return new CategoriaPolitica('Politica', 'Noticias sobre politica')
        }
        if(tipo.toUpperCase() == 'POLICIAL'){
            return new CategoriaPolicial('Policial', 'Noticias sobre crimes')
        }
        
    }
}
 
module.exports = {MetodoFabricaCategorias}
