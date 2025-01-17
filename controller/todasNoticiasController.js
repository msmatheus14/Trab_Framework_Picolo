const {Noticia} = require('../model/noticia_model.js')

const buscartodas = function (req, res){
    let dados = new Noticia() 
    let array = dados.getDados()
    console.log(array)

    res.render('todasnoticias', {array})
}
 
module.exports = {buscartodas}