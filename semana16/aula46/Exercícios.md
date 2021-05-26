### Exercício 1

a) O comando abaixo apaga a coluna "salary" da tabela "Actor"

```sql
    ALTER TABLE Actor DROP COLUMN salary;
```

b) O comando abaixo muda o nome da coluna "gender" para "sex" e mantém o tipo desta coluna como uma string de no máximo 6 caracteres.

```sql
ALTER TABLE Actor CHANGE gender sex VARCHAR(6);
```

c) O comando abaixo altera o tamanho máximo de caracteres permitidos nesta coluna para 255, mantendo o nome e o tipo.

```sql
ALTER TABLE Actor CHANGE gender gender VARCHAR(255);
```

d)

```sql
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
```
