// Exercícios de interpretação de código

// 1)   10
//      10 5

// 2)   10 10 10

// Exercícios de escrita de código

// 1)

let nome;
let idade;

console.log(typeof nome);
console.log(typeof idade);

// por que esse tipo foi impresso? undefined, pois não atribuí nenhum valor.

nome = prompt("Qual é o seu nome?");
idade = prompt("Quantos anos você tem?");

console.log(typeof nome);
console.log(typeof idade);

// alterou o typeof para 'string' pois foi atribuídos valores como textos.

console.log("Olá", nome, ", você tem", idade, "anos");

// 2)

let endereço = prompt("Qual o seu endereço?");
console.log("Endereço:", endereço);

let corFavorita = prompt("Qual a sua cor favorita?");
console.log("Cor Favorita:", corFavorita);

let estadoCivil = prompt("Qual a seu estado civil?");
console.log("Estado Civil:", estadoCivil);

let hobby = prompt("Algum hobby?");
console.log("Hobby:", hobby);

let serie = prompt("Qual série está assistindo atualmente?");
console.log("Série:", serie);

// 3)

let comidasFavoritas = [
  "Japa",
  "Pizza",
  "Hamburguer",
  "Cannelloni",
  "Strogonoff",
];
console.log(comidasFavoritas);
console.log("Essas são as minhas comidas preferidas:");
console.log(comidasFavoritas[0]);
console.log(comidasFavoritas[1]);
console.log(comidasFavoritas[2]);
console.log(comidasFavoritas[3]);
console.log(comidasFavoritas[4]);

let comidaFavorita = prompt("Qual a sua comida favorita?");
console.log("Nova lista:");
console.log(comidasFavoritas[0]);
console.log(comidaFavorita);
console.log(comidasFavoritas[2]);
console.log(comidasFavoritas[3]);
console.log(comidasFavoritas[4]);

// 4)

let perguntas = [
  prompt("Você usa óculos?"),
  prompt("Você possui algum veículo?"),
  prompt("Você está descalço?"),
];

let respostas = [true, false];

console.log(perguntas, respostas);
