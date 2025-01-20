const express = require('express')
const router = express.Router()

const {criarComentario, excluirComentario} = require('../controller/comentariosController')

router.post('/guerreironews/todas/:id', criarComentario)
router.post('/guerreironews/excluircomentario/:id', excluirComentario)  
module.exports = router 