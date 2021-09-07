const {Router} = require('express')
const router = Router()
const AnimesController = require('../controllers/animesController')

// TODO favoritar filmes
router
    .get('/AllFilms', AnimesController.listarTodosAnimes)
    .get('/Film/:id', AnimesController.listarUmAnime) 


module.exports = router