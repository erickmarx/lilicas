const db = require('../services/animesGhibliDB')
const api = require('../services/api')

class FavoritoController{

    static async listarTodosFav(req, res){
    const favoritos = new db()
    const result = await favoritos.listarTodosFav()
    return res.status(200).json(result);
    }

    static async favoritar(req, res){
    const titulo = await api.getFilmById(req.params.id)
    const favoritos = new db()
    const result = await favoritos.favoritar(req.params.id, titulo.title)
    return res.status(200).json(result);
  }

  static removeFav(req, res){
    const favoritos = new db()
    favoritos.removeFav(req.params.id)
    return res.status(200).json(`${req.params.id} EXCLUIDO`)
  }

  static async restoreFav(req, res){
    const favoritos = new db()
    const result = await favoritos.restoreFav(req.params.id)
    return res.status(200).json(`${req.params.id} RESTAURADO`)
    // return result
  }
}

module.exports = FavoritoController