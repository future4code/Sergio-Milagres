/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log("Bem vindo ao jogo de Blackjack!");

for (let i = 0; i === i; i++) {
  if (confirm("Quer iniciar uma nova rodada?")) {
    const carta1U = comprarCarta();
    const carta2U = comprarCarta();
    const somaU = carta1U.valor + carta2U.valor;
    console.log(
      "Usuário - cartas:",
      carta1U.texto,
      carta2U.texto,
      "- pontuação",
      somaU
    );

    const carta1PC = comprarCarta();
    const carta2PC = comprarCarta();
    const somaPC = carta1PC.valor + carta2PC.valor;
    console.log(
      "Computador - cartas:",
      carta1PC.texto,
      carta2PC.texto,
      "- pontuação",
      somaPC
    );

    if (somaU > somaPC) {
      console.log("O usuário ganhou!");
    } else if (somaU === somaPC) {
      console.log("Empate!");
    } else {
      console.log("O computador ganhou!");
    }
  } else {
    console.log("O jogo acabou");
  }
}
