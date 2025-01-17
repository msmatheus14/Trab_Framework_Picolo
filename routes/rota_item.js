const express = require('express')
const router = express.Router()

const {item} = require("../controller/NoticiaUnicaController")

router.get('/guerreironews/todas/:id', item)


module.exports = router