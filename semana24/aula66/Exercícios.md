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
