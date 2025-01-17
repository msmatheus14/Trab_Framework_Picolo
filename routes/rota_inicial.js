const express = require('express')
const router = express.Router()

const {inicial} = require('../controller/paginaInicialController')

router.get('/guerreironews', inicial)

module.exports = router