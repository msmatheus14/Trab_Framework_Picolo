const {Noticia} = require('../model/noticia_model.js')
const inicial = function (req, res){
    
    let dados = new Noticia()
    let array = dados.getDados()
    res.render('inicial', {array})
}

module.exports = {inicial} 