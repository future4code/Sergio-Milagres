type pokemon = {
  name: string;
  types: string;
  healthPoints: number;
};

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28,
};

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31,
};

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35,
};

// a) É necessário usar o comando "tsc exercicio4.ts".

// b) Eu iria navegar até a pasta onde está o arquivo e então usar o mesmo comando ou usar o comando "tsc src/exercicio4.ts".

// c) Se eu estiver na pasta onde encontram-se vários arquivos .ts eu posso escrever o nome de todos que eu desejar separados por espaços e eles serão transpilados. Outra forma é utilizar o tsc sem parâmtros, que fará com que todos os arquivos .ts encontrados sejam transpilados.

// d) Apenas as opções target e module estão descomentas nos dois arquivos.
