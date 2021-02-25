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

// EXERCÍCIO 7 (COM DESAFIO 1)

/* let genero = prompt("Qual gênero de filme que irão assitir?");
let preco = Number(prompt("Qual o preço do ingresso?"));
let snack = prompt("Que snack(s) irá comprar?");

if (genero === "fantasia") {
  if (preco < 15) {
    console.log("Bom filme!\n... com", snack);
  } else if (preco >= 15) {
    console.log("Escolha outro filme ☹");
  }
} else {
  console.log("Escolha outro filme ☹");
} */

// DESAFIO 2

const cliente = prompt("Informe seu nome completo");
console.log("---Dados da compra---");
console.log("Nome do cliente:", cliente);
const tipoDeJogo = prompt(
  "Informe o Tipo de jogo, conforme as opções abaixo:\nIN (Internacional)\nDO (Doméstico)"
);
switch (tipoDeJogo) {
  case "DO":
    console.log("Tipo do jogo: Nacional");
    break;
  case "IN":
    console.log("Tipo do jogo: Internacional");
    break;
  default:
    console.log("Tipo de jogo não encontrado");
    break;
}
const etapaDoJogo = prompt(
  "Informe a Etapa do jogo, conforme as opções abaixo:\nSF (Semi-final)\nDT (Decisão de terceiro lugar)\nFI (Final)"
);
switch (etapaDoJogo) {
  case "SF":
    console.log("Etapa do jogo: Semi-final");
    break;
  case "DT":
    console.log("Etapa do jogo: Decisão de terceiro lugar");
    break;
  case "FI":
    console.log("Etapa do jogo: Final");
    break;
  default:
    console.log("Etapa do jogo não encontrada");
    break;
}
const categoria = Number(prompt("Informe a Categoria:\n1, 2, 3 ou 4"));
switch (categoria) {
  case 1:
    console.log("Categoria:", categoria);
    break;
  case 2:
    console.log("Categoria:", categoria);
    break;
  case 3:
    console.log("Categoria:", categoria);
    break;
  case 4:
    console.log("Categoria:", categoria);
    break;
  default:
    console.log("Categoria não encontrada");
    break;
}
const quantIngresso = Number(prompt("Informe a quantidade de ingressos:"));
if (quantIngresso < 1) {
  console.log("Quantidade inválida!");
} else {
  console.log("Quantidade de Ingressos:", quantIngresso);
}

console.log("---Valores---");
let valorDoIngresso;
switch (tipoDeJogo) {
  case "DO":
    switch (etapaDoJogo) {
      case "SF":
        switch (categoria) {
          case 1:
            valorDoIngresso = 1320;
            console.log("Valor do ingresso: R$", valorDoIngresso);
            break;
          case 2:
            valorDoIngresso = 880;
            console.log("Valor do ingresso: R$", valorDoIngresso);
            break;
          case 3:
            valorDoIngresso = 550;
            console.log("Valor do ingresso: R$", valorDoIngresso);
            break;
          case 4:
            valorDoIngresso = 220;
            console.log("Valor do ingresso: R$", valorDoIngresso);
            break;
          default:
            console.log("Valor não encontrado, devido à categoria incorreta");
            break;
        }
        break;
      case "DT":
        switch (categoria) {
          case 1:
            valorDoIngresso = 660;
            console.log("Valor do ingresso: R$", valorDoIngresso);
            break;
          case 2:
            valorDoIngresso = 440;
            console.log("Valor do ingresso: R$", valorDoIngresso);
            break;
          case 3:
            valorDoIngresso = 330;
            console.log("Valor do ingresso: R$", valorDoIngresso);
            break;
          case 4:
            valorDoIngresso = 170;
            console.log("Valor do ingresso: R$", valorDoIngresso);
            break;
          default:
            console.log("Valor não encontrado, devido à categoria incorreta");
            break;
        }
        break;
      case "FI":
        switch (categoria) {
          case 1:
            valorDoIngresso = 1980;
            console.log("Valor do ingresso: R$", valorDoIngresso);
            break;
          case 2:
            valorDoIngresso = 1320;
            console.log("Valor do ingresso: R$", valorDoIngresso);
            break;
          case 3:
            valorDoIngresso = 880;
            console.log("Valor do ingresso: R$", valorDoIngresso);
            break;
          case 4:
            valorDoIngresso = 330;
            console.log("Valor do ingresso: R$", valorDoIngresso);
            break;
          default:
            console.log("Valor não encontrado, devido à categoria incorreta");
            break;
        }
        break;
      default:
        console.log("Valor não encontrado, devido à etapa do jogo incorreta");
        break;
    }
    break;
  case "IN":
    switch (etapaDoJogo) {
      case "SF":
        switch (categoria) {
          case 1:
            valorDoIngresso = 1320 / 4.1;
            console.log("Valor do ingresso: U$", valorDoIngresso);
            break;
          case 2:
            valorDoIngresso = 880 / 4.1;
            console.log("Valor do ingresso: U$", valorDoIngresso);
            break;
          case 3:
            valorDoIngresso = 550 / 4.1;
            console.log("Valor do ingresso: U$", valorDoIngresso);
            break;
          case 4:
            valorDoIngresso = 220 / 4.1;
            console.log("Valor do ingresso: U$", valorDoIngresso);
            break;
          default:
            console.log("Valor não encontrado, devido à categoria incorreta");
            break;
        }
        break;
      case "DT":
        switch (categoria) {
          case 1:
            valorDoIngresso = 660 / 4.1;
            console.log("Valor do ingresso: U$", valorDoIngresso);
            break;
          case 2:
            valorDoIngresso = 440 / 4.1;
            console.log("Valor do ingresso: U$", valorDoIngresso);
            break;
          case 3:
            valorDoIngresso = 330 / 4.1;
            console.log("Valor do ingresso: U$", valorDoIngresso);
            break;
          case 4:
            valorDoIngresso = 170 / 4.1;
            console.log("Valor do ingresso: U$", valorDoIngresso);
            break;
          default:
            console.log("Valor não encontrado, devido à categoria incorreta");
            break;
        }
        break;
      case "FI":
        switch (categoria) {
          case 1:
            valorDoIngresso = 1980 / 4.1;
            console.log("Valor do ingresso: U$", valorDoIngresso);
            break;
          case 2:
            valorDoIngresso = 1320 / 4.1;
            console.log("Valor do ingresso: U$", valorDoIngresso);
            break;
          case 3:
            valorDoIngresso = 880 / 4.1;
            console.log("Valor do ingresso: U$", valorDoIngresso);
            break;
          case 4:
            valorDoIngresso = 330 / 4.1;
            console.log("Valor do ingresso: U$", valorDoIngresso);
            break;
          default:
            console.log("Valor não encontrado, devido à categoria incorreta");
            break;
        }
        break;
      default:
        console.log("Valor não encontrado, devido à etapa do jogo incorreta");
        break;
    }
    break;
  default:
    console.log("Valor não encontrado, devido ao tipo de jogo incorreto");
    break;
}

let valorTotal = quantIngresso * valorDoIngresso;
switch (valorTotal) {
  case 0:
    console.log(
      "Valor não calculado, devido à quantidade de ingressos incorreta"
    );
    break;
  default:
    switch (tipoDeJogo) {
      case "DO":
        switch (etapaDoJogo) {
          case "SF":
            switch (categoria) {
              case 1:
                console.log("Valor total: R$", valorTotal);
                break;
              case 2:
                console.log("Valor total: R$", valorTotal);
                break;
              case 3:
                console.log("Valor total: R$", valorTotal);
                break;
              case 4:
                console.log("Valor total: R$", valorTotal);
                break;
              default:
                console.log(
                  "Valor não calculado, devido à categoria incorreta"
                );
                break;
            }
            break;
          case "DT":
            switch (categoria) {
              case 1:
                console.log("Valor total: R$", valorTotal);
                break;
              case 2:
                console.log("Valor total: R$", valorTotal);
                break;
              case 3:
                console.log("Valor total: R$", valorTotal);
                break;
              case 4:
                console.log("Valor total: R$", valorTotal);
                break;
              default:
                console.log(
                  "Valor não calculado, devido à categoria incorreta"
                );
                break;
            }
            break;
          case "FI":
            switch (categoria) {
              case 1:
                console.log("Valor total: R$", valorTotal);
                break;
              case 2:
                console.log("Valor total: R$", valorTotal);
                break;
              case 3:
                console.log("Valor total: R$", valorTotal);
                break;
              case 4:
                console.log("Valor total: R$", valorTotal);
                break;
              default:
                console.log(
                  "Valor não calculado, devido à categoria incorreta"
                );
                break;
            }
            break;
          default:
            console.log(
              "Valor não calculado, devido à etapa do jogo incorreta"
            );
            break;
        }
        break;
      case "IN":
        switch (etapaDoJogo) {
          case "SF":
            switch (categoria) {
              case 1:
                console.log("Valor total: U$", valorTotal);
                break;
              case 2:
                console.log("Valor total: U$", valorTotal);
                break;
              case 3:
                console.log("Valor total: U$", valorTotal);
                break;
              case 4:
                console.log("Valor total: U$", valorTotal);
                break;
              default:
                console.log(
                  "Valor não calculado, devido à categoria incorreta"
                );
                break;
            }
            break;
          case "DT":
            switch (categoria) {
              case 1:
                console.log("Valor total: U$", valorTotal);
                break;
              case 2:
                console.log("Valor total: U$", valorTotal);
                break;
              case 3:
                console.log("Valor total: U$", valorTotal);
                break;
              case 4:
                console.log("Valor total: U$", valorTotal);
                break;
              default:
                console.log(
                  "Valor não calculado, devido à categoria incorreta"
                );
                break;
            }
            break;
          case "FI":
            switch (categoria) {
              case 1:
                console.log("Valor total: U$", valorTotal);
                break;
              case 2:
                console.log("Valor total: U$", valorTotal);
                break;
              case 3:
                console.log("Valor total: U$", valorTotal);
                break;
              case 4:
                console.log("Valor total: U$", valorTotal);
                break;
              default:
                console.log(
                  "Valor não calculado, devido à categoria incorreta"
                );
                break;
            }
            break;
          default:
            console.log(
              "Valor não calculado, devido à etapa do jogo incorreta"
            );
            break;
        }
        break;
      default:
        console.log("Valor não calculado, devido ao tipo de jogo incorreto");
        break;
    }
    break;
}
