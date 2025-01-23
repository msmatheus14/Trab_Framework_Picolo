
class Log {

    constructor(logDB) {

        this.logDB = logDB
        
    }


   async retornarTodosLogs(quant) {

    if (arguments.length === 0){

        const log = await this.logDB.findAll({

            attributes: ['id', 'descricao', 'tipo', 'data']

        })

        const logList = log.map(log => log.get({ plain: true }))

        return logList

    }
    else

    {

        const log = await this.logDB.findAll({

            attributes: ['id', 'descricao', 'tipo', 'data']

        })

        const logList = log.map(log => log.get({ plain: true }))
        const logListQuant = logList.slice(-quant)

        return logListQuant

         
    }
}

    async criarLog(descricao){

        await this.logDB.create ({

            descricao: descricao,
            tipo: 'INFO' 

        })
    }

    async excluirTodosLogs() {

        await this.logDB.destroy({

            where: {},
            truncate: true
        })
    }       
}

module.exports = {Log}