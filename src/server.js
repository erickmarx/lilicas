require('dotenv').config();
const express = require('express');
const { getFilmeById } = require('./services/api');

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

// TODO receber o id como parametro na URL
app.get('/getFilm', async (req, res) => {
  const result = await getFilmeById('58611129-2dbc-4a81-a72f-77ddfc1b1b49');
  return res.status(200).json(result);
});

app.listen(process.env.PORT || 3000, () =>
  console.log('app listening on port 3000')
);
