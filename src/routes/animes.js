const {Router} = require('express')
const router = Router()
const AnimesController = require('../controllers/animesController')

// TODO favoritar filmes
router
    .get('/getAllFilms', AnimesController.listarTodosAnimes)
    .get('/getFilm/:id', AnimesController.listarUmAnime) 


module.exports = router