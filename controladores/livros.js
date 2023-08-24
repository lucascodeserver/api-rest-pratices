let bancodedados = require("../bancodedados/dados");

const consulta_da_colecao = (req, res) => {
  return res.status(200).json(bancodedados.livros);
};

const idLivro = (req, res) => {
  const { id } = req.params;
  const livroId = bancodedados.livros.find((livro) => {
    return livro.id === Number(id);
  });

  if (!Number(id)) {
    return res.json({
      mensagem: "O valor do parâmetro ID da URL não é um número válido.",
    });
  }
  if (!livroId) {
    return res.json("Não existe livro para o ID informado.");
  }
  return res.json(livroId);
};

const addLivro = (req, res) => {
  const { titulo, autor, ano, numPaginas } = req.body;
  const livro = {
    id: bancodedados.identificadorLivros++,
    titulo,
    autor,
    ano,
    paginas: Number(numPaginas),
  };
  bancodedados.livros.push(livro);
  return res.json(livro);
};
const substituirLivro = (req, res) => {
  const { id } = req.params;
  const { titulo, autor, ano, numPaginas } = req.body;

  const livroId = bancodedados.livros.find((livro) => {
    return livro.id === Number(id);
  });

  if (!livroId) {
    return res.json({
      mensagem: "Não existe livro a ser substituído para o ID informado.",
    });
  }
  livroId.titulo = titulo;
  livroId.autor = autor;
  livroId.ano = ano;
  livroId.numPaginas = numPaginas;
  return res.json({
    mensagem: "Livro substituído.",
  });
};
const alterarLivro = (req, res) => {
  const { id } = req.params;
  const { titulo, autor, ano, numPaginas } = req.body;

  const livroId = bancodedados.livros.find((livro) => {
    return livro.id === Number(id);
  });

  if (!livroId) {
    return res.json({
      mensagem: "Não existe livro a ser alterado para o ID informado.",
    });
  }
  livroId.titulo = titulo;
  livroId.autor = autor;
  livroId.ano = ano;
  livroId.numPaginas = numPaginas;
  return res.json({
    mensagem: "Livro alterado.",
  });
};

const deletarLivro = (req, res) => {
  const { id } = req.params;
  const apagarLivro = bancodedados.livros.find((livro) => {
    return livro.id === Number(id);
  });
  if (!apagarLivro) {
    return res.json({
      mensagem: "Não existe livro a ser removido para o ID informado.",
    });
  }
  bancodedados.livros = bancodedados.livros.filter((livro) => {
    return livro.id !== Number(id);
  });
  return res.json({
    mensagem: "Livro removido.",
  });
};
module.exports = {
  consulta_da_colecao,
  idLivro,
  addLivro,
  substituirLivro,
  alterarLivro,
  deletarLivro,
};