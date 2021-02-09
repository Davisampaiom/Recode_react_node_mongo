const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Produto = new Schema({
  categoria: {
    type: String,
    required: true,
  },
  descricao: {
    type: String,
    required: true,
  },
  preco: {
    type: String,
    required: true,
  },
  preco_venda: {
    type: String,
    required: true,
  },
  imagem: {
    type: String,
    required: true,
  },
});

mongoose.model("produtos", Produto);
