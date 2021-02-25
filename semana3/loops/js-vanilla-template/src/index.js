// Exercícios de interpretação de código

// EXERCÍCIO 1

/* 'valor' é definido como 0 inicialmente. O código entra em um looping com 'i' somando de 1 em 1 até parar em 4.
E o resultado dessa soma é somado com 'valor' que então aumenta a partir de 0 em 3, 6 e, o último impresso no console, 10

// EXERCÍCIO 2)

/* a)   19
        21
        23
        25
        27
        30
*/

/* b) Teria que usar o código dessa forma:

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let i = 0; i < lista.length; i++) {
  if (lista[i] > 18) {
		console.log(i)
	}
} */

// Exercícios de escrita de código

// EXERCÍCIO 3)

// const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55];

// a)

/* for(let numero of array){
    console.log (numero)
} */

// b)

/* for(let numero of array){
    console.log (numero/10)
} */

// c)

/* let novoArray = []

for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
        novoArray.push(array[i])
    }
}
console.log(novoArray) */

// d)

/* for (let i = 0; i < array.length; i++) {
  console.log("O elemento do índex", i, "é", array[i]);
} */

// e)

/* let valorMaximo = array[11];
let valorMinimo = array[0];

for (let i = 0; i < array.length; i++) {
  if (array[i] > valorMaximo) {
    valorMaximo = array[i];
  } else if (array[i] < valorMinimo) {
    valorMinimo = array[i];
  }
}

console.log("O maior número é", valorMaximo, "e o menor é", valorMinimo); */
