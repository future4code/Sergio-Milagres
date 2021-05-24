// a)
const posts: Array<post> = [
  {
    autor: "Alvo Dumbledore",
    texto:
      "Não tenha pena dos mortos, tenha pena dos vivos e, acima de tudo, daqueles que vivem sem amor.",
  },
  {
    autor: "Severo Snape",
    texto: "Eu sou o príncipe mestiço!",
  },
  {
    autor: "Hermione Granger",
    texto: "Podíamos ter sido mortos, ou pior, expulsos.",
  },
  {
    autor: "Dobby",
    texto:
      "Que lugar lindo para estar com os amigos. Dobby está feliz por estar com seu amigo Harry Potter",
  },
  {
    autor: "Lord Voldemort",
    texto: "Avada Kedavra!",
  },
];

type post = {
  autor: string;
  texto: string;
};

// b)
function buscarPostsPorAutor(posts: Array<post>, autorInformado: string) {
  return posts.filter((post) => {
    return post.autor === autorInformado;
  });
}
// As entradas da função abaixo são o array de posts e uma variavel tipo string com o nome do autor informado pelo usuário. A função irá retornar um array com todos os post cujo a o conteúdo da chave autor correspondam ao autorInfomado.
