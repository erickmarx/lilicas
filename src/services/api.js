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
    static async getAllFilms(limitID, order){
      let ArrayFilmes = []
      let result = 'Error'
      const object = await api.get(`/films?limit=${limitID}`)
      for(let i in object.data){
        ArrayFilmes.push({"Titulo": object.data[i].title, "ID": object.data[i].id})
      }
      if(order === 'namereverse' || order === 'name'){
        result = ArrayFilmes.sort((a ,b) => {
          if (a.Titulo < b.Titulo) return -1
          if (a.Titulo > b.Titulo) return 1
      })
        if(order === 'namereverse'){
          result = result.reverse()
        }
      }else{
        result = ArrayFilmes
      }
      
      return result
    }

}

module.exports = Animes;
