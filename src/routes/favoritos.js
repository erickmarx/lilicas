// const {Router} = require('express')
// const router = Router()
const FavoritoController = require('../controllers/favoritosController')

// // TODO favoritar filmes
// router
//     .get('/listFavs', FavoritoController.listarTodosFav)
//     .get('/favoritar/:id', FavoritoController.favoritar)
//     .get('/removeFav/:id', FavoritoController.removeFav)
//     .get('/restoreFav/:id', FavoritoController.restoreFav)

// module.exports = router


module.exports = app => {
    app
        .get('/listFavs', FavoritoController.listarTodosFav)
        .get('/favoritar/:id', FavoritoController.favoritar)
        .get('/removeFav/:id', FavoritoController.removeFav)
        .get('/restoreFav/:id', FavoritoController.restoreFav)
}