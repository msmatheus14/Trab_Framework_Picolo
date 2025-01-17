const express = require('express')
const router = express.Router()

const {criarComentario} = require('../controller/comentariosController')

router.post('/guerreironews/todas/:id', criarComentario)

module.exports = router