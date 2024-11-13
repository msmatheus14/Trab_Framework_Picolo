const express = require('express')
const router = express.Router()

const {inicial} = require('../controller/news_controller')

router.get('/guerreironews', inicial)

module.exports = router