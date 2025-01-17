const {Noticia} = require('../model/noticia_model.js')

const paginaCriarNoticia = function(req, res) {
    res.render('criarNoticia')
}

const criarNoticia = function(req, res) {

    let titulo = req.body.titulo
    let local = req.body.local
    let autor = req.body.autor
    let descricao = req.body.descricao
    let data = req.body.data
    let categoria = req.body.categoria

    console.log(categoria)
 
    let noticia = new Noticia()
    noticia.criarNoticia(titulo, local, autor, descricao, data, categoria)

    res.redirect('/guerreironews/todas') 
    
    

}
    

module.exports = {criarNoticia, paginaCriarNoticia}

