//Exercício 1

function inverteArray(array) {
  // implemente sua lógica aqui
  return array.reverse();
}

//Exercício 2

function retornaNumerosParesElevadosADois(array) {
  // implemente sua lógica aqui
  let arrayDeSaida = [];

  for (let x of array) {
    if (x % 2 === 0) {
      arrayDeSaida.push(x * x);
    }
  }
  return arrayDeSaida;
}

//Exercício 3

function retornaNumerosPares(array) {
  // implemente sua lógica aqui
  let novoArray = [];

  for (let x of array) {
    if (x % 2 === 0) {
      novoArray.push(x);
    }
  }
  return novoArray;
}

//Exercício 4

function retornaMaiorNumero(array) {
  // implemente sua lógica aqui
  return Math.max.apply(Math, array);
}

//Exercício 5

function retornaQuantidadeElementos(array) {
  // implemente sua lógica aqui
  let tamanho = array.length;
  return tamanho;
}

//Exercício 6

function retornaExpressoesBooleanas() {
  // implemente sua lógica aqui
  const booleano1 = true;
  const booleano2 = false;
  const booleano3 = !booleano2;
  const booleano4 = !booleano3;

  let a = booleano1 && booleano2 && !booleano4;
  let b = (booleano1 && booleano2) || !booleano3;
  let c = (booleano2 || booleano3) && (booleano4 || booleano1);
  let d = !(booleano2 && booleano3) || !(booleano1 && booleano3);
  let e = (!booleano1 && !booleano3) || (!booleano4 && booleano3 && booleano3);

  const respostas = [a, b, c, d, e];
  return respostas;
}

//Exercício 7

function retornaNNumerosPares(n) {
  // implemente sua lógica aqui
}

// Exercício 8

function checaTriangulo(a, b, c) {
  // implemente sua lógica aqui
  let equilatero = "Equilátero";
  let escaleno = "Escaleno";
  let isoceles = "Isósceles";

  if (a == b && b == c) {
    return equilatero;
  } else if (a != b && b != c && c != a) {
    return escaleno;
  } else {
    return isoceles;
  }
}

// Exercício 9

function comparaDoisNumeros(num1, num2) {
  // implemente sua lógica aqui
}

// Exercício 10

function segundoMaiorEMenor(array) {
  // implemente sua lógica aqui
}

//Exercício 11

function ordenaArray(array) {
  // implemente sua lógica aqui
}

// Exercício 12

function filmeFavorito() {
  // implemente sua lógica aqui
}

// Exercício 13

function imprimeChamada() {
  // implemente sua lógica aqui
}

// Exercício 14

function criaRetangulo(lado1, lado2) {
  // implemente sua lógica aqui
}

// Exercício 15

function anonimizaPessoa(pessoa) {
  // implemente sua lógica aqui
}

// Exercício 16

const arrayDePessoas = [
  { nome: "Pedro", idade: 20 },
  { nome: "João", idade: 10 },
  { nome: "Paula", idade: 12 },
  { nome: "Artur", idade: 89 },
];

// Exercício 16, letra A

function maioresDe18(arrayDePessoas) {
  // implemente sua lógica aqui
}

// Exercício 16, letra B

function menoresDe18(arrayDePessoas) {
  // implemente sua lógica aqui
}

// Exercício 17, letra A

function multiplicaArrayPor2(array) {
  // implemente sua lógica aqui
}

// Exercício 17, letra B

function multiplicaArrayPor2S(array) {
  // implemente sua lógica aqui
}

// Exercício 17, letra C

function verificaParidade(array) {
  // implemente sua lógica aqui
}

// Exercício 18

const pessoas = [
  { nome: "Paula", idade: 12, altura: 1.8 },
  { nome: "João", idade: 20, altura: 1.3 },
  { nome: "Pedro", idade: 15, altura: 1.9 },
  { nome: "Luciano", idade: 22, altura: 1.8 },
  { nome: "Artur", idade: 10, altura: 1.2 },
  { nome: "Soter", idade: 70, altura: 1.9 },
];

//Exercício 18, letra A

function retornaPessoasAutorizadas(pessoas) {
  // implemente sua lógica aqui
}

// Exercício 18, letra B

function retornaPessoasNaoAutorizadas(pessoas) {
  // implemente sua lógica aqui
}

//Exercício 19

const consultas = [
  {
    nome: "João",
    genero: "masculino",
    cancelada: true,
    dataDaConsulta: "01/10/2019",
  },
  {
    nome: "Pedro",
    genero: "masculino",
    cancelada: false,
    dataDaConsulta: "02/10/2019",
  },
  {
    nome: "Paula",
    genero: "feminino",
    cancelada: true,
    dataDaConsulta: "03/11/2019",
  },
  {
    nome: "Márcia",
    genero: "feminino",
    cancelada: false,
    dataDaConsulta: "04/11/2019",
  },
];

function retornaEmailConsulta(consultas) {
  // implemente sua lógica aqui
}

//Exercício 20

const contas = [
  { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
  { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
  { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
  { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
  { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
  { cliente: "Soter", saldoTotal: 1200, compras: [] },
];

function atualizaSaldo() {
  // implemente sua lógica aqui
}
