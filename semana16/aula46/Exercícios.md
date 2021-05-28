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
SET name = "JULIANA PAES"
WHERE name = "Juliana Paes";
UPDATE Actor
SET name = "Juliana Paes"
WHERE name = "JULIANA PAES";
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

### Exercício 3

a) No exercício 2, item a, foram alterados o nome e a data de nascimento da Fernanda Montenegro pelos da filha dela. Portanto, será apagado com o nome Fernanda Torres (não deixa de ser "Fernanda", rs)

```sql
    DELETE FROM Actor WHERE name = "Fernanda Torres";
```

b)

```sql
    DELETE FROM Actor
    WHERE gender = "male" AND salary > 1000000;
```

### Exercício 4

a)

```sql
   SELECT MAX(salary) FROM Actor;
```

b)

```sql
    SELECT MIN(salary) FROM Actor
    WHERE gender = "female";
```

C)

```sql
    SELECT COUNT(*) FROM Actor
    WHERE gender = "female";
```

d)

```sql
    SELECT SUM(salary) FROM Actor;
```

### Exercício 5

a) A query abaixo retorna a contagem agrupada pelo campo "gender" de todos os atores exibindo ao lado o genêro de cada resultado.

```sql
    SELECT COUNT(*), gender
    FROM Actor
    GROUP BY gender
```

b)

```sql
    SELECT id, name FROM Actor
    ORDER BY name DESC;
```

c)

```sql
    SELECT * FROM Actor
    ORDER BY salary;
```

d)

```sql
    SELECT * FROM Actor
    ORDER BY salary DESC LIMIT 3;
```

e)

```sql
    SELECT AVG(salary) AS 'Média de Salários', gender AS 'Gênero'
    FROM Actor
    GROUP BY gender;
```

### Exercício 6

a)

```sql
    ALTER TABLE Movie ADD COLUMN playing_limit_date DATE;
```

b)

```sql
    ALTER TABLE Movie CHANGE rating rating FLOAT;
```

c)

```sql
    UPDATE Movie
    SET playing_limit_date = "2021-06-16"
    WHERE id = "004";
    UPDATE Movie
    SET playing_limit_date = "2006-02-02"
    WHERE id = "001";
```

d) 0 row(s) affected Rows matched: 0 Changed: 0 Warnings: 0
Ocorreu o mesmo que no item d, do exercicio 2. Uma tentativa de alterar um elemento não existente. Apensar de não acusar nenhum erro, nenhuma alteração é feita na tabela.

```sql
    DELETE FROM Movie
    WHERE id = "004";
    UPDATE Movie
    SET synopsis = "Ótima comédia"
    WHERE id = "004";
```

### Exercício 7

a)

```sql
    SELECT COUNT(*) FROM Movie
    WHERE playing_limit_date > CURDATE() AND rating > 7.5;
```

b)

```sql
    SELECT AVG(rating) FROM Movie;
```

c)

```sql
    SELECT COUNT(*) FROM Movie
    WHERE playing_limit_date > CURDATE();
```

d)

```sql
    SELECT COUNT(*) FROM Movie
    WHERE release_date > CURDATE();
```

e)

```sql
    SELECT MAX(rating) FROM Movie;
```

f)

```sql
    SELECT MIN(rating) FROM Movie;
```

### Exercício 8

a)

```sql
    SELECT * FROM Movie
    ORDER BY name ASC;
```

b)

```sql
    SELECT * FROM Movie
    ORDER BY name DESC LIMIT 5;
```

c)

```sql
    SELECT * FROM Movie
    WHERE release_date < CURDATE()
    ORDER BY release_date DESC LIMIT 3;
```

d)

```sql
    SELECT * FROM Movie
    ORDER BY rating DESC LIMIT 3;
```
