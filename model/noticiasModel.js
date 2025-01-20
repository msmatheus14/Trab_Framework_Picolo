const database = require('../db')
const NoticiaDB = require('./noticiaDB')




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


    async criarNoticia(titulo, local, autor, descricao, data, categoria) {
        
        
        this.setTitulo(titulo);
        this.setLocal(local); 
        this.setAutor(autor);
        this.setDescricao(descricao);
        this.setData(data);
        this.setCategoria(categoria);
    
        try {
            // Garante que a sincronização com o banco de dados seja feita (somente se necessário)
            await database.sync();
    
            // Cria o registro no banco de dados
            const obj = await NoticiaDB.create({
                titulo: this.#titulo,
                local: this.#local,
                autor: this.#autor,
                descricao: this.#descricao,
                data: this.#data,
                categoria: this.#categoria,
            });
    
            console.log('Notícia criada com sucesso:');

        } catch (error) {

            console.error('Erro ao criar notícia:');
        } 
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

    async retornarTodasNoticias() {
        try {
            // Garante que a sincronização com o banco de dados seja feita (somente se necessário)
            await database.sync();
    
            // Busca todas as notícias no banco de dados
            const noticias = await NoticiaDB.findAll({
                attributes: ['id', 'titulo', 'local', 'autor', 'descricao', 'data', 'categoria']
            });
    
            // Transformando o resultado em um formato mais legível (array simples)
            const noticiasList = noticias.map(noticia => noticia.get({ plain: true }));
    
            console.log('Notícias retornadas com sucesso:');
            
    
            return noticiasList
    
        } catch (error) {
            console.error('Erro ao retornar notícias:', error.message); // Exibe a mensagem de erro
            console.error(error.stack); // Exibe a pilha do erro para depuração
        }
    }

    async excluirNoticia(id) {
        try {
            // Garante que a sincronização com o banco de dados seja feita (somente se necessário)
            await database.sync();
    
            // Busca a noticia no banco de dados
            const noticia = await NoticiaDB.findByPk(id);
    
            if (!noticia) {
                console.log('Notícia não encontrada');
                return false;
            }else
            {
                await noticia.destroy();
    
                return true
            }
    
            // Exclui a noticia do banco de dados
           
        } catch (error) {
            console.error('Erro ao excluir noticia:', error.message); // Exibe a mensagem de erro
            console.error(error.stack); // Exibe a pilha do erro para depuração
        }
    }
     

}


    module.exports = {Noticia}