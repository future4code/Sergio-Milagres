### Exercicio 1

#### a)

Utilizar strings é a melhor opção. Este type é melhor que number pois permite uma variedade de combinações e significados muito maior do que se limitássemos apenas à números.

### Exercicio 2

#### a)

O código acima armazena nas variáveis, "userTableName" e "connection" o nome da tabela que será acessada e os dados para a conexaão com o Banco utilizado respectivamente. Então cria-se a função assíncrona "createUser" que recebe como parâmetros as informações que serão inseridas na tabela "User" através do comando ".insert". Por último o ".into" indica a tabela em que as informações serão armazendas.

#### b)

```sql
    CREATE TABLE User (
	id VARCHAR(255) PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);
```

### Exercicio 3

#### a)

O "as string" informa ao typescript que a informação que virá do ".env" virá como uma string. É uma afirmação, uma garantia que o tipo de dado enviado será uma string.
