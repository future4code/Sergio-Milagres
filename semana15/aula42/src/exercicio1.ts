const minhaString: string = "Hello World";
// a) Ao atribuir um número à variável, o seu nome fica sublinhado em vermelho, indicando um erro. E ao passar o cursor no nome sublinhado, aparece a mensagem: "O tipo 'number' não pode ser atribuído ao tipo 'string'"

const meuNumero: number | string = 1;
// b) Para que a variavel aceite mais de um tipo de valores podemos separar os tipos com o caracter "|".

// c)
const pessoa1: { name: string; age: number; favoriteColor: string } = {
  name: "Jorge",
  age: 10,
  favoriteColor: "Azul",
};

type pessoa = {
  name: string;
  age: number;
  favColor: string;
};

const pessoa2: pessoa = {
  name: "João",
  age: 30,
  favColor: "Verde",
};

const pessoa3: pessoa = {
  name: "Maria",
  age: 45,
  favColor: "Roxo",
};

const pessoa4: pessoa = {
  name: "José",
  age: 25,
  favColor: "Vermelho",
};

// d)
enum rainbowColors {
  VERMELHO = "Vermelho",
  LARANJA = "Laranja",
  AMARELO = "Amarelo",
  VERDE = "Verde",
  AZUL = "Azul",
  ANIL = "Anil",
  VIOLETA = "Violeta",
}

type person = {
  name: string;
  age: number;
  favColor: rainbowColors;
};

const person1: person = {
  name: "Jorge",
  age: 10,
  favColor: rainbowColors.AZUL,
};

const person2: person = {
  name: "João",
  age: 30,
  favColor: rainbowColors.VERDE,
};

const person3: person = {
  name: "Maria",
  age: 45,
  favColor: rainbowColors.VIOLETA,
};

const person4: person = {
  name: "José",
  age: 25,
  favColor: rainbowColors.VERMELHO,
};
