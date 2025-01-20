
const Log = require('../model/logDB')// Importando o modelo Log para registrar os eventos

class NoticiaObserver {
  
  async onNoticiaCriada(noticia) {

    try {

      await Log.create({

        descricao: `Notícia criada: ${noticia.titulo}`,
        tipo: 'INFO',

      });
    } catch (error) {

      console.error('Erro ao registrar criação de notícia:', error);
    } 
  }

  
  async onNoticiaExcluida(noticia) {

    try {

      await Log.create({
        descricao: `Notícia excluida!: ${noticia.titulo} `,
        tipo: 'INFO',

      });
    } catch (error) {
      
      console.error('Erro ao registrar exclusão de notícia:', error);

    }
  }
}

module.exports = new NoticiaObserver()
