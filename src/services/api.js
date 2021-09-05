const axios = require('axios');

const api = axios.create({
  baseURL: 'https://ghibliapi.herokuapp.com',
});

// TODO passar essa service para ser uma classe - Finished
class Animes{
  
  static async getFilmById(id){
    const result = await api.get(`/films/${id}`)
    return result.data
  }
  
  // TODO listar TODOS os filmes - Finished
    static async getAllFilms(){
      let ArrayFilmes = []
      let filmes = {}
      const object = await api.get('/films')
      for(let i in object.data){
        ArrayFilmes.push({"Titulo": object.data[i].title, "ID": object.data[i].id})
      }
      const result = {...ArrayFilmes}
      // const result = ArrayFilmes
      return result

    }
}

module.exports = Animes;
