
const Log  = require('../model/logModel')

class NoticiaObserver {
  
  async onNoticiaCriada(noticia) {

  
      await Log.criarLog(`Noticia criada: ${noticia.titulo}`)

  
  }

  
  async onNoticiaExcluida(noticia) {

    await Log.criarLog(`Noticia excluida: ${noticia.titulo}`)
    
  }
}

module.exports = new NoticiaObserver()
