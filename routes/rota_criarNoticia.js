const express = require('express')
const router = express.Router()

const {criarNoticia} = require('../controller/criarNoticiaController')
const {paginaCriarNoticia} = require('../controller/criarNoticiaController')

router.get('/guerreironews/CriarNoticia', paginaCriarNoticia)
router.post('/guerreironews/criarNoticia', criarNoticia)

module.exports = router