
const {Log}  = require('../model/logModel')
const logDB = require('../model/DB/logDB')

const log = new Log(logDB)

class NoticiaObserver {
  
  async onNoticiaCriada(noticia) {

      await log.criarLog(`Noticia criada: ${noticia.titulo}`)

  }

  async onNoticiaExcluida(noticia) {

    await log.criarLog(`Noticia excluida: ${noticia.titulo}`)
  }
}

module.exports = new NoticiaObserver()
