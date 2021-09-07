require('dotenv').config();
const express = require('express');
const animes = require('./services/api');
const routes = require('./routes/index')
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

routes(app)

app.listen(process.env.PORT || 3000, () =>
  console.log('app listening on port 3000')
);
