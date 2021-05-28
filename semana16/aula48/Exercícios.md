### Exercício 1

a)

É um campo em uma tabela através do qual esta tabela se relaciona com outra tabela. Este campo deve possuir o mesmo formato da Primary Key da tabela de referência e seus valores devem necessariamente existir na tabela de referência.

b)

```sql
    CREATE TABLE Rating (
	id INT PRIMARY KEY AUTO_INCREMENT,
    comment TEXT NOT NULL,
	rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id)
    );

    INSERT INTO Rating (comment, rate, movie_id)
    VALUES
    ("'Se Eu Fosse Você' não tem uma ideia original, já que existem muitos filmes de troca de sexo, mas é muito engraçado e espirituoso. Glória Pires é fantástica, muito bonita e também é a responsável por alguns dos melhores momentos do filme. Tony Ramos é 'muito masculino', não tem aquela 'coisa gay' que alguns atores costumam mostrar em suas interpretações; portanto, sua expressão corporal e movimentos como mulher não são naturais como seu papel requer. Enfim, suas falas e situações são hilárias e sua química com Glória Pires é perfeita. O resto do elenco também é excelente e este filme é uma grande diversão","6.1", "001"),
    ("Com apenas 70 minutos de duração, Doce de Mãe foi tão bem sucedido em sua estreia na televisão que acabou gerando uma série, com 14 episódios, lançada no ano seguinte. Fernanda Montenegro venceu o Emmy Internacional como Melhor Atriz pelo telefilme e, depois, foi indicada novamente pela sua interpretação no seriado. Louros merecidos por uma performance inesquecível, que se soma a tantas outras já apresentadas pela veterana atriz.","7.7", "002"),
    ("Como na adaptação original, Dona Flor acerta ao falar abertamente sobre o desejo sexual da mulher e tratar disso sem rodeios ou piadas. Flor gosta de sexo e sexo bom. E não há problema nenhum nisso. É possível dizer que em 2017 as mulheres possuem mais liberdade do que em 1976, quando o primeiro Dona Flor chegou aos cinemas. Porém, o recente retorno do puritanismo mostra como é importante ter essa história novamente nos cinemas. Quando percebe que será feliz realmente com seus dois maridos, Flor dá um tapa na cara da sociedade e em nós também. O novo longa provavelmente não terá o impacto de seu antecessor, mas levanta questões importantes. Por que três pessoas não podem ser felizes em um relacionamento? Aliás, o que os outros têm a ver com isso? Essa é a mensagem que Dona Flor passa com louvor: a vida é curta para se ter medo de ser feliz. Sempre haverá alguém para apontar o dedo e ditar o que é um relacionamento “certo” ou “errado”, mas não vale a pena ser infeliz por isso. Dona Flor e Seus Dois Maridos faz o que o cinema faz de melhor: usa fantasia para enxergar a realidade. E tudo isso sem medo de ser um pouco safado.","5.7", "003"),
    ("Mesmo que a obra de Paulo Gustavo não torne suas personagens femininas e homossexuais em amontoados de clichês, o roteiro desvia suas piadas exageradas para outros alvos fáceis e esquece de focar em temas relevantes, preferindo dar lugar à caricatura que o humorista faz da mãe. Fadado à repetição de piadas e gritarias de seus antecessores, é difícil que Minha Mãe É Uma Peça 3 iguale, também, as boas marcas de bilheteria alcançadas pela franquia.","7.1", "004");
```

c)

Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`cruz-2114912-sergio-milagres`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))

Ele diz que não é possível adicionar ou atualizar a linha porque uma condição da chave estrangeira falhou. No caso, o conteúdo do campo definido como chave estrangeira, precisa existir na tabela de referência.

d)

```sql
    ALTER TABLE Movie
    DROP COLUMN rating;
```

e)

Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`cruz-2114912-sergio-milagres`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))

Ele diz que não é possível deletar ou atualizar a linha porque uma condição da chave estrangeira falhou. Neste caso, a linha em questão está relacionado à uma informação em uma outra tabela onde a chave estrangeira aponta para a PK deta linha.

### Exercicio 2

a)

Esta tabela relaciona o id de um ator ao id de um filme. Ambos os ids são PK's em suas respectivas tabelas e aqui estão definidos como FK. Cada linha desta tabela possuirá um id de ator e um id de filme correspondente, podenos ambas as informações se repetirem uma vez que não são PK e a relação entre filmes e atores é de N:M.

b)

Tive que atualizar alguns atores na tabela Actor

```sql
    INSERT INTO MovieCast (movie_id, actor_id)
    VALUES
    ("001","001"),
    ("001","002"),
    ("002","003"),
    ("003","004"),
    ("003","005"),
    ("004","006");
```

c)

Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`cruz-2114912-sergio-milagres`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))

Ele diz que não é possível adicionar ou atualizar a linha porque uma condição da chave estrangeira falhou. No caso, o conteúdo informado da coluna movie_id não existe na tabela de referência.

d)

Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`cruz-2114912-sergio-milagres`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))

Ele diz que não é possível adicionar ou atualizar a linha porque uma condição da chave estrangeira falhou. Neste caso, a linha em questão está relacionado à uma informação em uma outra tabela onde a chave estrangeira aponta para a PK deta linha.

### Exercicio 3

a)

O operador ON é a condição que indica quais combinações das duas tabelas serão exibidas. Caso não seja definida essa condição, serão exibidas todas as combinações possíveis para estas duas tabelas.

b)

```sql
    SELECT name, Movie.id, rate FROM Movie
    INNER JOIN Rating ON Movie.id = Rating.movie_id;
```

### Exercicio 4

a)

```sql
    SELECT name, Movie.id, rate, comment FROM Movie
    LEFT JOIN Rating ON Movie.id = Rating.movie_id;
```

b)

```sql
    SELECT Movie.id, Movie.name, MovieCast.actor_id FROM Movie
    RIGHT JOIN MovieCast ON MovieCast.movie_id = Movie.id;
```

c)

```sql
    SELECT AVG(Rating.rate) AS "Avaliação Média", Movie.id, Movie.name FROM Movie
    LEFT JOIN Rating ON Movie.id = Rating.movie_id
    GROUP BY (Movie.id) ORDER BY (AVG(Rating.rate)) DESC;
```

### Exercicio 5

a)

Essa query une em um primeiro momento as tabelas Movie e MovieCast. Depois com um novo JOIN ela acrescenta a essa junção as informações da tabela Actor. Há a necessidade de um segundo JOIN, pois as tabelas Movie e Actor são independentes uma das outra, não possuindo chaves que façam a ligação diretamente entre elas. Para isso foi usada a tabela de junção MovieCast, que possue duas FK, sendo cada uma delas relacionada a uma das tabelas independentes.

b)

```sql
    SELECT m.id AS "Id do Filme", m.name AS "Filme", a.id AS "Id do Ator", a.name AS "Ator" FROM Movie m
    LEFT JOIN MovieCast mc ON m.id = mc.movie_id
    JOIN Actor a ON a.id = mc.actor_id;
```

c)

Error Code: 1054. Unknown column 'm' in 'field list'

O erro acusa que não reconhece uma coluna "m". Isso acontece pq "m" está sendo usado como apelido para a tabela Movie e quando escrito na linha de campos deveria vir seguido de um "." e o nome do campo desta tabela. Porém, houve um erro de digitação e o "m" foi seguido de uma virgula no lugar do ponto. fazendo com que o SQL entendesse que aquele "m" era um campo e, assim não o reconheceu. Ao trocar "m,title" por "m.name", a query passou a funcionar.

d)

```sql
    SELECT m.name AS "Filme", a.name AS "Ator", r.comment AS "Comentários", r.rate AS "Avaliação" FROM Movie m
    LEFT JOIN Rating r on r.movie_id = m.id
    LEFT JOIN MovieCast mc ON m.id = mc.movie_id
    JOIN Actor a ON a.id = mc.actor_id;
```

### Exercicio 6

a)

É uma relação M:N

b)

```sql
    CREATE TABLE Awards (
	id INT PRIMARY KEY AUTO_INCREMENT,
	award VARCHAR(255) NOT NULL,
    year VARCHAR(4) NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id)
);
```

C)

```sql
    INSERT INTO Awards (award, year, movie_id)
    VALUES
    ("Melhor trilha sonora","2007", "001"),
    ("Melhor design de produção","2007", "001"),
    ("Melhor filme","2013", "002"),
    ("Melhor direção","2013", "002"),
    ("Melhor fotografia","2018", "003"),
    ("Melhor roteiro adaptado","2018", "003"),
    ("Melhor roteiro original","2020", "004"),
    ("Maquiagem e cabelo","2020", "004");
```

d)

```sql
    SELECT m.name AS "Filme", a.award AS "Oscar de", a.year AS "Ano" FROM Movie m
    INNER JOIN Awards a ON m.id = a.movie_id;
```
