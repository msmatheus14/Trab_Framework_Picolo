
const logDB = require('../model/DB/logDB')
const {Log} = require('../model/logModel')

log = new Log(logDB)


const paginaLog = async (req, res) => {

    let logs = await log.retornarTodosLogs() 

    res.render('paginaLog', {logs})

}

const excluirTodosLogs = async (req, res) => {

    
    await log.excluirTodosLogs()

    res.redirect('/guerreironews/logs')

}

 
module.exports = {excluirTodosLogs, paginaLog}