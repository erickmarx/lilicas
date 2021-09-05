require('dotenv').config();
const express = require('express');
const animes = require('./services/api');

const app = express();

app.use(express.json());

app.get('/health', (req, res) => {
  const obj = {
    data: new Date().toISOString(),
    message: 'OK',
    clientHeaders: {
      host: req.headers.host,
      userAgent: req.headers['user-agent'],
    },
  };
  return res.status(200).json(obj);
});

// TODO receber o id como parametro na URL - Finished
app.get('/getFilm/:id', async (req, res) => {
  const result = await animes.getFilmById(req.params.id)
  return res.status(200).json(result);
});

app.get('/allFilms', async (req, res) => {
    const limitID = req.query.limit || 20
    const result = await animes.getAllFilms(limitID)
  return res.status(200).json(result);
});

app.listen(process.env.PORT || 3000, () =>
  console.log('app listening on port 3000')
);
