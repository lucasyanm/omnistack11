const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json()); //antes de todas as requisições, converter o JSON recebido em javascript
app.use(routes);

app.listen(3333);