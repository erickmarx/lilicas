const axios = require('axios');

const api = axios.create({
  baseURL: 'https://ghibliapi.herokuapp.com',
});

// TODO listar TODOS os filmes - Finished
// TODO passar essa service para ser uma classe - Finished
class Animes{

    static async getFilmById(id){
      const result = await api.get(`/films/${id}`)
      return result.data
    }

    static async getAllFilms(){
      let filmes = []
      const object = await api.get('/films')
      for(let i in object.data){
        filmes.push([object.data[i].title, object.data[i].id])
      }
      const result = Object.fromEntries(filmes)
      return result

    }
}

module.exports = Animes;
