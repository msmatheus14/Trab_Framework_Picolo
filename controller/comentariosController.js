const {Comentario} = require('../model/comentario_model.js')

const criarComentario = (req, res) =>{ 

    //adicionei a data e hora do sistema para ser gravada no comentário

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



module.exports = {criarComentario}
