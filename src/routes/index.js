const animes = require('./animes')
const favoritos = require('./favoritos')
const users = require('./users')

// module.exports = app => {

//     app.use(
//         animes,
//         favoritos,
//         users
//     )

// }

module.exports = app =>{
    animes(app)
    favoritos(app)
    users(app)
}