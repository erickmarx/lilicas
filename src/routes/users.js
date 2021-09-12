// const {Router} = require('express')
// const router = Router()
const UserController = require('../controllers/usersController')
// const ControladorUser = new UserController()

// router
//     // .get()
//     .post('/criarLogin', new UserController().Create)

// module.exports = router

module.exports = app =>{
    app
        .post('/criarLogin', new UserController().Create)
}