const db = require('../services/animesGhibliDB')
const api = require('../services/api')

class FavoritoController{

    static async listarTodosFav(req, res){
    const result = await new db().listarTodosFav()
    return res.status(200).json(result);
    }

    static async favoritar(req, res){
    const titulo = await api.getFilmById(req.params.id)
    const result = await new db().favoritar(req.params.id, titulo.title)
    return res.status(200).json(result);
  }

  static removeFav(req, res){
    new db().removeFav(req.params.id)
    return res.status(200).json(`${req.params.id} EXCLUIDO`)
  }

  static async restoreFav(req, res){
    await new db().restoreFav(req.params.id)
    return res.status(200).json(`${req.params.id} RESTAURADO`)
  }
}

module.exports = FavoritoController