const express = require('express')
const router = express.Router()


const {criarNoticia, paginaCriarNoticia, paginaInicial, paginaItemNoticia, paginaTodasNoticias, excluirNoticia} = require('../controller/noticiasController')



router.get('/guerreironews/todas/:id', paginaItemNoticia)
router.get ('/guerreironews/todas', paginaTodasNoticias)
router.get('/guerreironews/CriarNoticia', paginaCriarNoticia) 
router.post('/guerreironews/criarNoticia', criarNoticia)
router.get('/guerreironews', paginaInicial)
router.get('/guerreironews/excluir/:id', excluirNoticia)



module.exports = router  