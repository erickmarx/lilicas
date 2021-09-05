const axios = require('axios');

const api = axios.create({
  baseURL: 'https://ghibliapi.herokuapp.com',
});

// TODO listar TODOS os filmes
// TODO passar essa service para ser uma classe 

const getFilmeById = async (id) => {
  const result = await api.get(`/films/${id}`);
  return result.data;
};

module.exports = { getFilmeById };
