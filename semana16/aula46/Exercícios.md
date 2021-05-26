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

### Exercício 2

a)

```sql
    UPDATE Actor
    SET
    name = "Fernanda Torres",
    birth_date = "1965-09-15"
    WHERE id = "003";
```

b)

```sql
UPDATE Actor
SET name = "JULIANA PÃES"
WHERE name = "Juliana Paes";
UPDATE Actor
SET name = "Juliana Paes"
WHERE name = "JULIANA PÃES";
```

c)

```sql
    UPDATE Actor
    SET
    name = "Grazi Massafera",
    birth_date = "1982-06-28",
    salary = 800000,
    gender = "female"
    WHERE id = "005";
```

d) 0 row(s) affected Rows matched: 0 Changed: 0 Warnings: 0

Apesar de não ter sido acusado um erro, este comando não realizou nenhuma alteração na tabela pois não existia nenhum elemento com o id igual a "015", por exemplo. Logo nenhuma linha foi afetada.

```sql
    UPDATE Actor
    SET name = "Marina Ruy Barbosa"
    WHERE id = "015";
```
