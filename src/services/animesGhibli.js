const database = require('../../models/index')

// TODO receber o id como parametro na URL - Finished

class Favoritos{

    async listarTodosFav(){
        return await database.Favoritos.findAll()
    }

    async favoritar(idFav, titulo){
        const infos = {idFav, titulo}
        return await database.Favoritos.create(infos)
    }
}

module.exports = Favoritos