const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();

//Conectando ao Banco
mongoose.connect('mongodb://nodestore:nodestore@ds046357.mlab.com:46357/nodestore')

// Carregando Models
const procucts = require('../src/models/products');

// Carregar as Rotas
const indexRoutes = require('../src/routes/index-routes');
const productsRoutes = require('../src/routes/products-routes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', indexRoutes);
app.use('/procucts', productsRoutes);


module.exports = app;