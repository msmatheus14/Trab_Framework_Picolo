
const Log = require('../model/logModel')
const excluirTodosLogs = async (req, res) => {

    
    await Log.excluirTodosLogs()

    res.redirect('/guerreironews')

}
 
module.exports = {excluirTodosLogs}