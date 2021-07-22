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
