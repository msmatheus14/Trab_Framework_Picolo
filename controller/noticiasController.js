const {FabricaNoticia} = require('../model/noticiasModel.js')
const {Log} = require('../model/logModel.js')
const {Comentario} = require('../model/comentariosModel.js')

const NoticiaDB = require('../model/DB/noticiaDB.js')
const comentarioDB = require('../model/DB/comentarioDB.js')
const logDB = require('../model/DB/logDB.js')

const database = require('../db.js')

//Utilizei o principio de designer de IoC através do método de injeção de dependências

const fabricaNoticia = new FabricaNoticia(database, NoticiaDB)
let comentarios = new Comentario(database, comentarioDB)
let log = new Log(logDB)


const paginaCriarNoticia = async function(req, res) {

    res.render('paginaCriarNoticia', )
}   

const criarNoticia = function(req, res) { 

    let titulo = req.body.titulo
    let local = req.body.local
    let autor = req.body.autor
    let descricao = req.body.descricao
    let data = req.body.data
    let categoria = req.body.categoria
    let tipo = req.body.tipo
    
    console.log(typeof(tipo))  
 
    fabricaNoticia.criarNoticia(titulo, local, autor, descricao, data, categoria,tipo)

    res.redirect('/guerreironews/todas') 
    
}
    
const paginaItemNoticia = async function(req, res) {

    let id = req.params.id
    id = parseInt(id)  

    let dados = await  fabricaNoticia.retornarTodasNoticias()

    let dadosComentarios = await comentarios.retornarTodosComentarios()
    
    if(dadosComentarios == null || dadosComentarios == undefined || dadosComentarios.length == 0){

        let comentariosNoticia = null

        dados.map((ni,index) => {

           
            if(id == ni.id){ 
                let ni = dados[index]  
                res.render('paginaItemNoticia',{ni, comentariosNoticia})  
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
                res.render('paginaItemNoticia',{ni, comentariosNoticia})  
            }
        }) 

    }
 
} 

const paginaInicial = async function (req, res){ 
    
    let logs = await log.retornarTodosLogs(2)
    
    let array =  await fabricaNoticia.retornarNoticiaTipo('1')

    res.render('paginaInicial', {array, logs})
}  
  

const paginaTodasNoticias = async function (req, res) {

    let array = await fabricaNoticia.retornarTodasNoticias();

     await res.render('paginaTodasNoticias', { array });
     
}

const excluirNoticia = async function(req, res) {

    let id = req.params.id

    id = parseInt(id)

    await fabricaNoticia.excluirNoticia(id)

    res.redirect('/guerreironews/todas')

   
}


module.exports = {paginaCriarNoticia, criarNoticia, paginaItemNoticia, paginaInicial, paginaTodasNoticias, excluirNoticia} 