const express = require ('express')
const router = express.Router()
const {buscartodas} = require('../controller/news_controller')

router.get ('/guerreironews/todas', buscartodas)

module.exports = router