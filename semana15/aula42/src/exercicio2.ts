function obterEstatisticas(numeros: Array<number>) {
  const numerosOrdenados: Array<number> = numeros.sort((a, b) => a - b);

  let soma: number = 0;

  for (let num of numeros) {
    soma += num;
  }

  const estatisticas: { maior: number; menor: number; media: number } = {
    maior: numerosOrdenados[numeros.length - 1],
    menor: numerosOrdenados[0],
    media: soma / numeros.length,
  };

  return estatisticas;
}

// a) A entrada para a função é um Array de números e saída será o objeto estatisticas.

// b) As outras variáveis da função são numerosOrdenados e soma. A tipagem foi definida na função acima. A variável num, utilizada no For, não pode ter sua tipagem definida na estrutura.

// c)
type amostra = {
  numeros: Array<number>;
  obterEstatisticas: (numeros: number) => void;
};
