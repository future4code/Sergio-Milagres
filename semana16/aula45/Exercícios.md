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
