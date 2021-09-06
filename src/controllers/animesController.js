const api = require('../services/api')

class AnimesController{
    static async listarTodosAnimes(req, res){
        const limitID = req.query.limit || 20
        const order = req.query.order || 0
        const result = await api.getAllFilms(limitID, order)
        return res.status(200).json(result);
    }

    static async listarUmAnime(req, res){
        const result = await api.getFilmById(req.params.id)
        return res.status(200).json(result);
    }
}

module.exports = AnimesController