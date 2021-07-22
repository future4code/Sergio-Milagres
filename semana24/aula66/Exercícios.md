### Exercício 1

```typescript
const findFirstRecurringCharacter = (input) => {
  const charHashMap = {};
  for (const char of input) {
    if (charHashMap[char] === true) {
      return char;
    }
    charHashMap[char] = true;
  }
  return null;
};
```

- Complexidade é O(n) pois possui apenas um loop simples com incremento linear.

### Exercício 2

```typescript
export const func = (source: string, comparison: string): boolean => {
  if (
    comparison.length > source.length + 1 ||
    comparison.length < source.length - 1
  ) {
    return false;
  }
  let commonCharQuantity = 0;

  for (const char of comparison) {
    if (source !== comparison) {
      commonCharQuantity++;
    }
  }
  return (
    commonCharQuantity <= source.length + 1 &&
    commonCharQuantity >= source.length - 1
  );
};
```

- Complexidade é O(n) pois possui apenas um loop simples com incremento linear.

### Exercício 3

```typescript
export const replaceMatrixValue = (
  matrix: number[][],
  rowIndex: number,
  columnIndex: number,
  value: number
): void => {
  if (
    matrix[rowIndex] === undefined ||
    matrix[rowIndex][columnIndex] === undefined
  ) {
    throw new Error("Fora do intervalo da matriz");
  }

  matrix[rowIndex][columnIndex] = value;
};
```

Complexidade é O(1) pois não possui loop dependente de entrada.

### Exercício 4

```typescript
function verifyIfExistRepeatedNumbers(listOfNumbers: number[]): boolean {
  for (let i = 0; i < listOfNumbers.length; i++) {
    if (listOfNumbers.indexOf(listOfNumbers[i]) !== i) {
      return true;
    }
  }
  return false;
}
```

Complexidade é O(n²) pois a função indexOf() recebe os elemnetos do array como argumento o que indica que ela irá realizar iterações em um array. Sendo assim, ela funciona como uma estrutura de laço e por estar dentro de outra estrutura de laço, define a complexidade como O(n²).

### Exercício 5

Em ordem de Eficiência:

1. Algorítmo 3 - O(1)
2. Algorítmo 1 - O(n)
3. Algorítmo 2 - O(n)
4. Algorítmo 4 - O(n²)

### Exercício 6

```typescript
function product(a: number, b: number): number {
  let sum = 0;
  for (let i = 0; i < b; i++) {
    sum += a;
  }
  return sum;
}
```

Complexidade é O(n) ou mais precisamente O(b) pois possui apenas um loop dependente do valor de "b" com incremento linear.

### Exercício 7

```typescript
function mod(a: number, b: number): number {
  if (b <= a) {
    return -1;
  }
  let div = a / b;
  return a - div * b;
}
```

Complexidade é O(1) pois não possui loop dependente de entrada.
