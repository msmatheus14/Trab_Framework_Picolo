const database = require('../db')
const NoticiaDB = require('./DB/noticiaDB')


class Noticia {
    

    constructor(){

        this.id = null
        this.titulo = null
        this.local = null
        this.autor = null
        this.descricao = null
        this.data = null
        this.categoria = null
        this.tipo = null

        if(new.target === Noticia){
            throw new TypeError("Não é permitido instanciar uma classe abstrata")
        }

    }

    getTitulo() {

        return this.titulo
    }

    getLocal() {

        return this.local
    }

    getAutor() {

        return this.autor
    }

    getDescricao() {

        return this.descricao
    }

    getData() {

        return this.data
    }

    getCategoria() {

        return this.categoria
    }

    getTipo() {

        return this.tipo

    }
        



    setTitulo(titulo) {

        this.titulo = titulo
    }

    setLocal(local) {

        this.local = local
    }

    setAutor(autor) {

        this.autor = autor
    }

    setDescricao(descricao) {

        this.descricao = descricao
    }

    setData(data) {

        this.data = data
    }

    setCategoria(categoria) {

        this.categoria = categoria
    }

    setTipo(tipo) {

        this.tipo = tipo
    }


}

class NoticiaUrgente extends Noticia {

    
    constructor( titulo, local, autor, descricao, data, categoria, tipo) {
        super()

        this.setTitulo(titulo)
        this.setLocal(local) 
        this.setAutor(autor)
        this.setDescricao(descricao)
        this.setData(data)
        this.setCategoria(categoria)
        this.setTipo(tipo) // 1 para noticia urgente
        
        this.criarNoticia(titulo, local, autor, descricao, data, categoria, tipo)
    
    } 


    async criarNoticia() {
        
        try {
           
            await database.sync()
    
            
            const obj = await NoticiaDB.create({

                titulo: this.getTitulo(),
                local: this.getLocal(),
                autor: this.getAutor(),
                descricao: this.getDescricao(),
                data: this.getData(),
                categoria: this.getCategoria(),
                tipo: this.getTipo()

            })

            return true
    
         } catch (error) {

           return false
            
        } 
    }
    

    
     

}

class NoticiaNormal extends Noticia {


        constructor( titulo, local, autor, descricao, data, categoria, tipo) {
            super()

            this.setTitulo(titulo)
            this.setLocal(local) 
            this.setAutor(autor)
            this.setDescricao(descricao)
            this.setData(data)
            this.setCategoria(categoria)
            this.setTipo(tipo) //2 para noticia normal

             this.criarNoticia()
        } 
    
    
        async criarNoticia() {
            
            
            try {
               
                await database.sync()
        
                
                const obj = await NoticiaDB.create({
    
                    titulo: this.getTitulo(),
                    local: this.getLocal(),
                    autor: this.getAutor(),
                    descricao: this.getDescricao(),
                    data: this.getData(),
                    categoria: this.getCategoria(),
                    tipo: this.getTipo()
    
                })
    
                return true
        
             } catch (error) {
    
               return false
                
            } 
        }

}

class FabricaNoticia {

     criarNoticia(titulo, local, autor, descricao, data, categoria, tipo) {


        console.log(titulo, local, autor, descricao, data, categoria, tipo)
        if(tipo == '1'){

            console.log('1')

            return new NoticiaUrgente(titulo, local, autor, descricao, data, categoria, tipo)
        }else

        if(tipo == '2'){  

            console.log('2')
            
            return new NoticiaNormal(titulo, local, autor, descricao, data, categoria, tipo)
        }
    }

    async retornarTodasNoticias() {
        try {
            
            await database.sync()
    
            
            const noticias = await NoticiaDB.findAll({
                attributes: ['id', 'titulo', 'local', 'autor', 'descricao', 'data', 'categoria', 'tipo']
            })
            
            const noticiasList = noticias.map(noticia => noticia.get({ plain: true }))
     
            return noticiasList
    
        } catch (error) {
            console.error('Erro ao retornar notícias:', error) 
            
        }
    }

    async excluirNoticia(id) {

        try {
            
            await database.sync()
    
            const noticia = await NoticiaDB.findByPk(id)
    
            if (!noticia) {
                console.log('Notícia não encontrada')
                return false
            }else
            {
                await noticia.destroy()
    
                return true
            }
    
           
        } catch (error) {

            console.error('Erro ao excluir noticia:', error.message) 
            console.error(error.stack) 
        }
    }

    async retornarNoticiaTipo(tipo) {

        try {
            
            await database.sync()
    
            
            const noticias = await NoticiaDB.findAll({
                attributes: ['id', 'titulo', 'local', 'autor', 'descricao', 'data', 'categoria', 'tipo'],
                where: {
                    tipo: tipo
                }
            })
            
            const noticiasList = noticias.map(noticia => noticia.get({ plain: true }))
     
            return noticiasList
    
        } catch (error) {
            console.error('Erro ao retornar notícias:', error) 
            
        }
        }

}

    module.exports = new FabricaNoticia() 