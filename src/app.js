const express = require('express');
const medicosRoutes = require('./routes/medicosRoutes');

const app = express();

// Avisa o Express que vamos trabalhar com dados no formato JSON
app.use(express.json());

// Cadastra o nosso "cardápio" de rotas na aplicação
app.use('/', medicosRoutes);

module.exports = app;