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

    async removeFav(idFav){
        await database.Favoritos.destroy({where: {idFav: idFav}})
    }

    async restoreFav(idFav){
        console.log(idFav)
        await database.Favoritos.restore({where: {idFav: idFav}}) 
    }
}

module.exports = Favoritos