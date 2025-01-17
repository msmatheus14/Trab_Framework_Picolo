class Anuncio {

    #id
    #descricao
    #valor
    #dataCadastro
    #categoria
    #status
    #urlImagem

    
    constructor(id, descricao, valor, dataCadastro, categoria, status, urlImagem){

        this.#id = id
        this.#descricao = descricao
        this.#valor = valor
        this.#dataCadastro = dataCadastro
        this.#categoria = categoria
        this.#status = status
        this.#urlImagem = urlImagem

    }

    
    getId() {

        return this.#id
    }

    getDescricao() {

        return this.#descricao
    }

    getValor() {

        return this.#valor
    }

    getDataCadastro() {

        return this.#dataCadastro
    }

    getCategoria() {

        return this.#categoria
    }

    getStatus() {

        return this.#status
    }

    getUrlImagem() {

        return this.#urlImagem
    }

    
    setId(id) {

        this.#id = id
    }

    setDescricao(descricao) {

        this.#descricao = descricao
    }

    setValor(valor) {

        this.#valor = valor
    }

    setDataCadastro(dataCadastro) {

        this.#dataCadastro = dataCadastro
    }

    setCategoria(categoria) {

        this.#categoria = categoria
    }

    setStatus(status) {

        this.#status = status
    }

    setUrlImagem(urlImagem) {

        this.#urlImagem = urlImagem
    }

    
    alterarAnuncio(descricao, valor, categoria, status, urlImagem) {

        this.setDescricao(descricao)
        this.setValor(valor)
        this.setCategoria(categoria)
        this.setStatus(status)
        this.setUrlImagem(urlImagem)
    }

    
    consultarAnuncio() {

        return {
            id: this.getId(),
            descricao: this.getDescricao(),
            valor: this.getValor(),
            dataCadastro: this.getDataCadastro(),
            categoria: this.getCategoria(),
            status: this.getStatus(),
            urlImagem: this.getUrlImagem()
        }
    }

    
    excluirAnuncio() {

        
    }
}
