// Exercícios de interpretação de código

// 1.

// a. false
// b. false
// c. true
// e. boolean

// 2.

// a. undefined
// b. null
// c. 11
// d. 3
// e. Array(11) [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// f. 9

// Exercícios de escrita de código

// 1.

const idade = prompt("Qual a sua idade?");
const idadeAmigo = prompt("Qual a idade do(a) seu(ua) melhor amigo(a)?");

const comparacao = Number(idade) > Number(idadeAmigo);
console.log("Sua idade é maior do que a do seu melhor amigo?", comparacao);
const diferença = Number(idade) - Number(idadeAmigo);
console.log("Diferença de idades: ", diferença);

// 2.

const numeroPar = prompt("Insira um número par");
let restoDaDivisao = Number(numeroPar) % 2;
console.log("Resto da Divisão: ", restoDaDivisao);

/* c. O resultado do resto referente à divisão do número inserido, sendo PAR, por 2 dá sempre "0". 
Pois todo número par é divisivel por 2 */

// d. O resultado do resto referente à divisão do número inserido, sendo ÍMPAR, por 2 dá sempre "1".

// 3.

let listaDeTarefas = [];

const tarefa1 = prompt(
  "Cite 3 tarefas que você precisa realizar",
  "Primeira Tarefa"
);

const tarefa2 = prompt(
  "Cite 3 tarefas que você precisa realizar",
  "Segunda Tarefa"
);

const tarefa3 = prompt(
  "Cite 3 tarefas que você precisa realizar",
  "Terceira Tarefa"
);

listaDeTarefas.push(tarefa1, tarefa2, tarefa3);
console.log("Lista de Tarefas:", listaDeTarefas);

const indice = prompt(
  "Informe o índice (0, 1 ou 2) de uma tarefa que já realizou"
);
listaDeTarefas.splice(Number(indice), 1);
console.log("Lista de Tarefas:", listaDeTarefas);

// 4.

let emailDoUsuario = prompt("Informe seu e-mail:");
let nomeDoUsuario = prompt("Informe seu nome:");
const mensagem =
  "O e-mail " +
  emailDoUsuario +
  " foi cadastrado com sucesso. Seja bem-vindo(a), " +
  nomeDoUsuario +
  "!";

console.log(mensagem);
