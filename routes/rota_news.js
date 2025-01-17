const express = require ('express')
const router = express.Router()

const {buscartodas} = require('../controller/todasNoticiasController')



router.get ('/guerreironews/todas', buscartodas)

module.exports = router