/*

Exercícios de interpretação de código

EXERCÍCIO 1)

O cógio inicialmente pede ao usuário para inserir um número qualquer.
O que é inserido é transformado de 'string' para 'number'
De acordo com a condicional do código, o número inserido ao ser dividido por 2 deve restar 0.
Se o número for par, consequentemente o resto é igual a 0 o console imprime "Passou no teste.".
Caso contrário, o número for ímpar, tendo o resto diferente de 0 o console imprime "Não passou no teste."

EXERCÍCIO 2)

a) Para que o console, quando o usuário escolher alguma fruta, 
imprima o preço e a fruta que o usuário escolheu seguindo um encadeamento de condições.

b) "O preço da fruta Maçã é R$ 2.25"

c) "O preço da fruta Pêra é R$ 5"

EXERCÍCIO 3)

a) A primeira linha está convertendo um 'string' para 'number' o número que o usuário está inserindo no prompt.
Mesmo que seja um número inserido, ele resulta como tipo 'string' e precisa ser "convertido" pra número proriamente dito

b) Ao iserir 10 a mensagem no console é "Esse número passou no teste". Ao iserir -10 dá erro no console.

c) Sim, há um erro. Porque a variável 'mensagem' pertence somente ao escopo e não ao bloco. */

// Exercícios de escrita de código

// EXERCÍCIO 4)

/* const idade = Number(prompt("Informe sua iadade"));

if (idade >= 18) {
    console.log ("Você pode dirigir")
}

else {
    console.log ("Você não pode dirigir.")
} */

// EXERCÍCIO 5

/* const turno = prompt(
  "Em qual turno você estuda? Digita as opções da lista abaixo.\nM (Matutino)\nV (Vespertino)\nN (Noturno)"
);

if (turno === "M") {
  console.log("Bom Dia!");
} else if (turno === "m") {
  console.log("Bom Dia!");
} else if (turno === "V") {
  console.log("Boa Tarde!");
} else if (turno === "v") {
  console.log("Boa Tarde!");
} else if (turno === "N") {
  console.log("Boa Noite!");
} else if (turno === "n") {
  console.log("Boa Noite!");
} else {
  console.log(
    "Digita somente as opções da lista abaixo.\nM (Matutino)\nV (Vespertino)\nN (Noturno)"
  );
} */

// EXERCÍCIO 6

/* const turno = prompt(
  "Em qual turno você estuda? Digita as opções da lista abaixo.\nM (Matutino)\nV (Vespertino)\nN (Noturno)"
);

switch (turno) {
  case "M":
    console.log("Bom Dia!");
    break;
  case "m":
    console.log("Bom Dia!");
    break;
  case "V":
    console.log("Boa Tarde!");
    break;
  case "v":
    console.log("Boa Tarde!");
    break;
  case "N":
    console.log("Boa Noite!");
    break;
  case "n":
    console.log("Boa Noite!");
    break;
  default:
    console.log(
      "Digita somente as opções da lista abaixo.\nM (Matutino)\nV (Vespertino)\nN (Noturno)"
    );
    break;
} */

// EXERCÍCIO 7

/* let genero = prompt("Qual gênero de filme que irão assitir?");
let preco = Number(prompt("Qual o preço do ingresso?"));

if (genero === "fantasia") {
  if (preco < 15) {
    console.log("Bom filme!");
  } else if (preco >= 15) {
    console.log("Escolha outro filme ☹");
  }
} else {
  console.log("Escolha outro filme ☹");
} */
