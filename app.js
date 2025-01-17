if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;
const router = require('./routes');
const errorHandler = require('./middlewares/error-handler');

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', router);

app.listen(3000, () => {
  console.log('i-i', port);
});

app.use(errorHandler);
