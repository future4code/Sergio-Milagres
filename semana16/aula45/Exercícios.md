### Exercício 1

a)

- CREATE TABLE Actor () - Usado para criar a tabela com o nome especificado a seguir

- id VARCHAR(255) PRIMARY KEY, - Nesta linha é criado o campo id e o VARCHAR(255) define o tipo do campo como uma String com tamanho máximo de 255 caracteres. O PRIMARY KEY define o campo como a chave primária da tabela, que não poderá possuir valores repetidos e de preenchimento obrigatório.

- name VARCHAR(255) NOT NULL, - Como na linha anterior, aqui o campo name é definido como string de no máximo 255 caracteres e de preenchimento obrigatório (not null).

- birth_date DATE NOT NULL, - Cria o campo birth_date definido como DATA (formato YYYY/MM/DD) com preenchimento obrigatório (not null).

- gender VARCHAR(6) NOT NULL - Cria um campo gender definido como string com no maximo 6 caracteres e também com preenchimento obrigatório (not null).

b) SHOW DATABASES - Foram exibidos na aba de resultados o nome do banco de dados utilizado "cruz-2114912-sergio-milagres" e na linha de baixo "information_schema".
SHOW TABLES - Foram exibidos os nomes das tabelas criadas anteriormente (Actor e professores_labenu).

c) DESCRIBE Actor - O Workbench exibiu a descrição da tabela Actor, mostrando o nome dos campos, o tipo de cada campo assim como qual deles é a PK, se estão configurados como null ou não e seus valores (no caso todos constam como null pois não foram inseridos valores ainda).

### Exercício 2

a)

```sql
    INSERT INTO Actor (id, name, salary, birth_date, gender)
    VALUES (
    "002",
    "Glóra Pires",
    1200000,
    "1963-08-23",
    "female"
    );
```

b) Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'
Tradução: Entrada 002 duplicada para a chave primária.
Este erro aocnteceu porque o campo "id" foi definido como chave primária da tabela e não aceita valores duplicados. O valor "002" já foi utilizado como id de outro elemento.

c) Error Code: 1136. Column count doesn't match value count at row 1
O erro indica que a quantidade de campos informados na primeira linha não corresponde aos campos e valores informados nas linhas seguintes. Na prática falta a informação dos campos "birth_date" e "gender".

```sql
    INSERT INTO Actor (id, name, salary, birth_date, gender)
    VALUES(
    "003",
    "Fernanda Montenegro",
    300000,
    "1929-10-16",
    "female"
    );
```

d) Error Code: 1364. Field 'name' doesn't have a default value
Aqui, apesar do campo "name" não ter sido informado nem na primeira linha nem ter tido seu valor definido, acontece o erro pois no momento da criação da tabela o campo foi definido como NOT NULL, logo ele precisa ter uma valor para que um elemento seja criado.

```sql
    INSERT INTO Actor (id, name, salary, birth_date, gender)
    VALUES(
    "004",
    "Antônio Fagundes",
    400000,
    "1949-04-18",
    "male"
    );
```

e) Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1
O campo birth_date é do tipo DATE e os valores para este tipo de campo precisam ser informados entre aspas.

```sql
    INSERT INTO Actor (id, name, salary, birth_date, gender)
    VALUES(
    "005",
    "Juliana Paes",
    719333.33,
    "1979-03-26",
    "female"
    );
```

f)

```sql
    INSERT INTO Actor (id, name, salary, birth_date, gender)
    VALUES(
    "006",
    "Moacyr Franco",
    50000,
    "1936-10-05",
    "male"
    );(
    "007",
    "Camila Pitanga",
    200000,
    "1977-06-14",
    "female"
    );
```

### Exercício 3

a)

```sql
    SELECT * from Actor WHERE gender = "female";
```

b)

```sql
    SELECT salary from Actor WHERE name = "Tony Ramos";
```

c) A query abaixo não retornou nenhuma informação, pois não existe nenhum elemento com o campo gender com este valor.

```sql
    SELECT * from Actor WHERE gender = "invalid";
```

d)

```sql
    SELECT id, name, salary from Actor WHERE salary <= 500000;
```

e) Error Code: 1054. Unknown column 'nome' in 'field list'
O erro aponta um nome de coluna desconhecido. O nome do campo é "name" e não "nome" como informado.

```sql
    SELECT id, name from Actor WHERE id = "002";
```
