const express = require('express')
const router = express.Router()

const {item} = require("../controller/news_controller")

router.get('/guerreironews/todas/:id', item)


module.exports = router