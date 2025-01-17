let noticias = [
    {
        id: 1,
        titulo: "Câmara dos Deputados aprova reforma tributária",
        local: "Brasília",
        autor: "Luiza Maria Silva",
        descricao: "A Câmara dos Deputados aprovou na noite de ontem a reforma tributária, que promete reduzir impostos para empresas e aumentar a arrecadação do governo.",
        data: "2025-01-05",
        categoria: {nome: "Política", 'descricao': 'Notícias sobre política'}	
    },
    {
        id: 2,
        titulo: "Brasil vence Argentina na final da Copa América",
        local: "Rio de Janeiro",
        autor: "Carlos Alberto Mendes",
        descricao: "A seleção brasileira conquistou o título da Copa América após vencer a Argentina por 3 a 1 na grande final disputada no Maracanã.",
        data: "2025-01-07",
        categoria: {nome: "Esporte", 'descricao': 'Notícias sobre esportes'}
    },
    {
        id: 3,
        titulo: "Polícia prende quadrilha que furtava carros de luxo",
        local: "São Paulo",
        autor: "Fernanda Lima",
        descricao: "A Polícia Civil desarticulou uma quadrilha especializada em furtos de carros de luxo em São Paulo, com prisões de membros envolvidos no esquema.",
        data: "2025-01-10",
        categoria: {nome: "Policial", 'descricao': 'Notícias sobre crimes'}
    }
]

const {MetodoFabricaCategorias} = require('../model/categoria_model')

class Noticia {


    #id 
    #titulo
    #local
    #autor
    #descricao
    #data
    #categoria
    constructor(){

        this.#id = null
        this.#titulo = null
        this.#local = null
        this.#autor = null
        this.#descricao = null
        this.#data = null
        this.#categoria = null

    }


    criarNoticia(titulo, local, autor, descricao, data, categoria) {
        
        this.setId(this.definirProximoId()) 
        this.setTitulo(titulo)
        this.setLocal(local)
        this.setAutor(autor)
        this.setDescricao(descricao)
        this.setData(data)

        let fabricaCategoria = new MetodoFabricaCategorias()
        this.#categoria = fabricaCategoria.criarCategoria(categoria)

        if(this.#categoria == null || this.#categoria == undefined){

            return console.error('Categoria não existe')

        }else
        if(this.#categoria != null || this.#categoria != undefined){

            let obj = {

                id:this.#id,
                titulo:this.#titulo,
                local:this.#local,
                autor:this.#autor,
                descricao:this.#descricao,
                data:this.#data,
                categoria:this.#categoria

            }


                let array = this.getDados()
                array.push(obj)
                this.setDados(array)

        }

                
        
        
        
    }

        
    

    definirProximoId(){
 
        const array = this.getDados()

        if(array.length == 0){

            return 1

        }else
        if(array.length !== 0){
            
            let ultimo = array[array.length - 1] 
            return ultimo.id + 1
        }
    }

    
    getId() {

        return this.#id

    }

    getTitulo() {

        return this.#titulo
    }

    getLocal() {

        return this.#local
    }

    getAutor() {

        return this.#autor
    }

    getDescricao() {

        return this.#descricao
    }

    getData() {

        return this.#data
    }

    getCategoria() {

        return this.#categoria
    }

    
    setId(id) {

        this.#id = id
    }

    setTitulo(titulo) {

        this.#titulo = titulo
    }

    setLocal(local) {

        this.#local = local
    }

    setAutor(autor) {

        this.#autor = autor
    }

    setDescricao(descricao) {

        this.#descricao = descricao
    }

    setData(data) {

        this.#data = data
    }

    setCategoria(categoria) {

        this.#categoria = categoria
    }


    alterarNoticia(titulo, local, autor, descricao, data, categoria) {

        this.setTitulo(titulo)
        this.setLocal(local)
        this.setAutor(autor)
        this.setDescricao(descricao)
        this.setData(data)
        this.setCategoria(categoria)
    }

    retornarTodasNoticias(){
        let dados = new Dados()
 
        return array = dados.getDados()
    }

    
   
    consultarNoticia() {

        return {

            id: this.getId(),
            titulo: this.getTitulo(),
            local: this.getLocal(),
            autor: this.getAutor(),
            descricao: this.getDescricao(),
            data: this.getData(),
            categoria: this.getCategoria()
        }
    }

    getDados (){
        return noticias
    }

    setDados (array){

        noticias = array
    }

   
    
}


    module.exports = {Noticia}