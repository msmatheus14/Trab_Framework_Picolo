const {Noticia} = require('../model/noticia_model.js')
const {Comentario} = require('../model/comentario_model.js')

const item = function(req, res) {

    let id = req.params.id
    id = parseInt(id)

    let news = new Noticia()
    let dados = news.getDados()
    let comentarios = new Comentario()
    let dadosComentarios = comentarios.getDados()

    let comentariosNoticia = []

    dadosComentarios.map((comentario) => {

        if(comentario.idNoticia == id){

            comentariosNoticia.push(comentario)
        }
    })
    
    dados.map((ni,index) => {

        console.log(ni)
        if(id == ni.id){ 
            let ni = dados[index]
            res.render('item',{ni,comentariosNoticia})  
        }
    }) 
} 



module.exports = {item}
