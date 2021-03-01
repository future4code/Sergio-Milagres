// Exercícios de interpretação de código

// EXERCÍCIO 1

// a.
// 10
// 50

// b.

// Os valores ficariam apenas guardados mas não impressos no console

// EXERCÍCIO 2

// a. De acordo com a condição de repetição:
// Darvas
// Caio

// b.
// Amanda
// Caio

// EXERCÍCIO 3

/* A função monta o novo array com a condição: se um número do array for par, eleve-o ao quadrado. 
Um nome significativo seria quadradoDeNumerosPares */

// Exercícios de escrita de código

// EXERCÍCIO 4

// a.
/*
let sobreMim = () => {
    console.log("Eu sou", nome, ", tenho", idade, "anos, moro em", cidade, "e", simOuNaoSou, "estudante.")
}

const nome = "Sérgio"
const idade = 23
const cidade = "Barra Mansa"
const souOuNaoSou = "sou"
sobreMim()
*/

// b.
/*
let apresentacao = (nome, idade, endereço, estudante) => {
  let informacoes;

  if (estudante === true) {
    const mensagem =
      "Eu sou " +
      nome +
      ", tenho " +
      idade +
      " anos, moro em " +
      endereço +
      " e sou estudante";
    console.log(mensagem);
  } else {
    const mensagem =
      "Eu sou " +
      nome +
      ", tenho " +
      idade +
      " anos, moro em " +
      endereço +
      " e não sou estudante";
    console.log(mensagem);
  }
  return informacoes;
};

const nome = prompt("Informe seu nome:");
const idade = Number(prompt("Informe sua idade:"));
const endereço = prompt("Informe seu endereço:");
const estudande = confirm("Você estuda?");

apresentacao(nome, idade, endereço, estudande);
*/

// EXERCÍCIO 5

// a.
/*
let somaNumeros = (num1, num2) => {
  const soma = num1 + num2;
  return soma;
};

let x = Number(prompt("Informe um número:"));
let y = Number(prompt("Informe um número:"));
const resultado = somaNumeros(x, y);
console.log(resultado);
*/

// b.
/*
let numeros = (num1, num2) => {
  let comparacao = num1 >= num2

  if (comparacao === true) {
    console.log(num1, "é maior ou igual a", num2);
  } else if (comparacao === false) {
    console.log(num1, "é menor do que", num2);
  } else {
    console.log("Informação incorreta!");
  }
  return comparacao;
};

let x = Number(prompt("Informe um número:"));
let y = Number(prompt("Informe um número:"));
const resultado = numeros(x, y);
*/
// c.
