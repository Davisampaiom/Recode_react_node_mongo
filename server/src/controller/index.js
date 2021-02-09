const mongoose = require("mongoose");
require("../../config/db");


require("../models/Mensagem");
require("../models/Produtos");

const Mensagem = mongoose.model("mensagem");
const Produto = mongoose.model("produtos");

const ReceiveMensagem = async (req, res) => {
  const mensagemResponse = await Mensagem.find();
  const mensagemJSON = await mensagemResponse;

  res.json(mensagemJSON);
};

const SendMensagem = async (req, res) => {
  const novaMensagem = new Mensagem({
    nome: req.body.nome,
    mensagem: req.body.mensagem,
  });
  novaMensagem.save();

  res.json({ message: "Mensagem enviada com sucesso!" });
};

const ReceiveProdutos = async (req, res) => {
  const produtoResponse = await Produto.find();
  const produtoJSON = await produtoResponse;

  res.json(produtoJSON);
};

module.exports = { SendMensagem, ReceiveProdutos, ReceiveMensagem };
