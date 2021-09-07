const animes = require('./animes')
const favoritos = require('./favoritos')

module.exports = app => {

    app.use(
        animes,
        favoritos
    )

}