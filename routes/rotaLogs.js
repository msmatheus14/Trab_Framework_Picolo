const express = require('express')
const router = express.Router()

const {excluirTodosLogs, paginaLog} = require('../controller/logController')


router.get('/guerreironews/logs', paginaLog )
router.post('/guerreironews/excluirlogs', excluirTodosLogs )

module.exports = router  