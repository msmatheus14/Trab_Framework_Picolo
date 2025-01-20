const express = require('express')
const router = express.Router()

const {excluirTodosLogs} = require('../controller/logController')

router.post('/guerreironews/excluirlogs', excluirTodosLogs )

module.exports = router 