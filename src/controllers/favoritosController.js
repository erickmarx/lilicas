const db = require('../services/animesGhibli')
const api = require('../services/api')

class FavoritoController{

    static async listarTodosFav(req, res){
    const favoritos = new db()
    const result = await favoritos.listarTodosFav()
    return res.status(200).json(result);
    }

    static async favoritar(req, res){
    const id = req.params.id
    const titulo = await api.getFilmById(req.params.id)
    const favoritos = new db()
    const result = await favoritos.favoritar(id, titulo.title)
    return res.status(200).json(result);
  }
}

module.exports = FavoritoController