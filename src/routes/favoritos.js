const {Router} = require('express')
const router = Router()
const FavoritoController = require('../controllers/favoritosController')

// TODO favoritar filmes
router
    .get('/listFavs', FavoritoController.listarTodosFav)
    .get('/favoritar/:id', FavoritoController.favoritar) 


module.exports = router