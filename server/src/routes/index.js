const express = require('express');
const routes = express.Router();
const Rota = require('../controller/index')


routes.get('/', Rota.ReceiveProdutos);

routes.get('/mensagem', Rota.ReceiveMensagem);
routes.post('/mensagem', Rota.SendMensagem);


module.exports = routes