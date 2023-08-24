const express = require("express");
const rotas = express();
const livros = require("./controladores/livros");

rotas.get("/livros", livros.consulta_da_colecao);
rotas.get("/livros/:id", livros.idLivro);
rotas.post("/livros", livros.addLivro);
rotas.put("/livros/:id", livros.substituirLivro);
rotas.patch("/livros/:id", livros.alterarLivro);
rotas.delete("/livros/:id", livros.deletarLivro);

module.exports = rotas;