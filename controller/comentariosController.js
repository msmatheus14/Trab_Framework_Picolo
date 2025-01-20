const {Comentario} = require('../model/comentariosModel.js')

const criarComentario = (req, res) =>{ 


    const data = new Date();
    const dataHora = data.toISOString().slice(0, 19).replace("T", " ");
    
    let data2 = dataHora

    let comentario = req.body.comentario
    let autor = req.body.nome  

    let idNoticia = req.body.idNoticia

    let comentarioNovo = new Comentario()
    
    comentarioNovo.criarComentario(data2, comentario, autor, idNoticia)

    res.redirect('back')

} 

const excluirComentario = async (req, res) =>{

    let id = req.params.id
    id = parseInt(id)    

    let comentario = new Comentario()
    let dados = await comentario.retornarTodosComentarios()

    await comentario.excluirComentario(id)

    res.redirect('back')

}



module.exports = {criarComentario, excluirComentario}
