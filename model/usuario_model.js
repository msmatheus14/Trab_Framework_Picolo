let usuarios = []

class Usuario {
    constructor() {

        this.id = null
        this.nome = null
        this.login = null
        this.senha = null
        this.tipo = null

        if (new.target === Usuario) {
            throw new Error("Classe abstrata, não pode ser instanciada.")
        }
    }

    criarUsuario(nome, login, senha, tipo) {
        throw new Error("Método abstrato 'criarUsuario' deve ser implementado na subclasse.")
    }

    tipoUsuario() {
        return { tipo: this.tipo }
    }

    getDados() {
        return usuarios
    }

    setDados(dados) {
        usuarios = dados
    }
}

class UsuarioColaborador extends Usuario {
    constructor() {
        super()
    }

    criarUsuario(nome, login, senha, tipo) {

        const user = {

            id: this.definirProximoId(),
            nome: nome,
            login: login,
            senha: senha,
            tipo: tipo,
        }

        const array = this.getDados()
        array.push(user)
        this.setDados(array)

        return user 
    }

    definirProximoId() {

        const dados = this.getDados()

        if (dados.length === 0) {

            return 1

        } else {

            return dados[dados.length - 1].id + 1
        }
    }
}

class UsuarioADM extends Usuario {

    constructor() {
        super()
    }

    criarUsuario(nome, login, senha, tipo) {

        const user = {

            id: this.definirProximoId(),
            nome: nome,
            login: login,
            senha: senha,
            tipo: tipo,
        }

        const array = this.getDados()
        array.push(user)
        this.setDados(array)

        return user
    }

    definirProximoId() {

        const dados = this.getDados()

        if (dados.length === 0) {

            return 1

        } else {

            return dados[dados.length - 1].id + 1
        }
    }
}

class FabricaUsuario {

    criarTipoUsuario(nome, login, senha, tipo) {

        if (tipo === "1") {

            return new UsuarioColaborador().criarUsuario(nome, login, senha, tipo)

        } else if (tipo === "2") {

            return new UsuarioADM().criarUsuario(nome, login, senha, tipo)

        } else {
            
            throw new Error("Tipo de usuário inválido.")
        }
    }
}

module.exports = { FabricaUsuario }
