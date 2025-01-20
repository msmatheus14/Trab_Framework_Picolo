const logDB = require('../model/logDB');

class Log {
    constructor() {
        
    }

   async retornarTodosLogs() {
        const log = await logDB.findAll({
            attributes: ['id', 'descricao', 'tipo', 'data']
        })

        const logList = log.map(log => log.get({ plain: true }))

        return logList 
    }

    async excluirTodosLogs() {
        await logDB.destroy({
            where: {},
            truncate: true
        })
    }       
}

module.exports = new Log()