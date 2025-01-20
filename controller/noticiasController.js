const {Noticia} = require('../model/noticiasModel.js')
const {Comentario} = require('../model/comentariosModel.js')
const e = require('express')


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
    
const paginaItemNoticia = async function(req, res) {

    let id = req.params.id
    id = parseInt(id)

    let news = new Noticia()
    let dados = await  news.retornarTodasNoticias()


    let comentarios = new Comentario()
    
    let dadosComentarios = await comentarios.retornarTodosComentarios()
    
    if(dadosComentarios == null || dadosComentarios == undefined || dadosComentarios.length == 0){

        console.log('Não há comentários')
        let comentariosNoticia = null

        dados.map((ni,index) => {

           
            if(id == ni.id){ 
                let ni = dados[index]  
                res.render('item',{ni, comentariosNoticia})  
            }
        }) 
        
         
    }

    else{

        console.log(dadosComentarios) 

        let comentariosNoticia = []

        dadosComentarios.map((comentario) => {

        if(comentario.idNoticia == id){

            comentariosNoticia.push(comentario)
        }
    })
    
        dados.map((ni,index) => {

            
            if(id == ni.id){ 
                let ni = dados[index]  
                res.render('item',{ni,comentariosNoticia})  
            }
        }) 

    }


    
} 

const paginaInicial =  function (req, res){ 
    
    let dados = new Noticia()
    let array = dados.retornarTodasNoticias()
    res.render('inicial', {array})
} 


const paginaTodasNoticias = async function (req, res) {

    let dados = new Noticia();
    let array = await dados.retornarTodasNoticias();

    
     await res.render('todasnoticias', { array });
    
}

const excluirNoticia = async function(req, res) {

    let id = req.params.id
    id = parseInt(id)

    let noticia = new Noticia()
    await noticia.excluirNoticia(id)

    res.redirect('/guerreironews/todas')

   
}
 
module.exports = {paginaCriarNoticia, criarNoticia, paginaItemNoticia, paginaInicial, paginaTodasNoticias, excluirNoticia} 