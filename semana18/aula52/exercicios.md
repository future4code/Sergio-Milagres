### Exercicio 1

#### a)

Round é um fator mumérico que influencia no tempo de execução do algoritmo. Salt é uma string aleatória que é adicionada à senha antes da criação do hash. Recomenda-se que seja utilizado o maior valor possível de acordo com o sistem e equipamentos utilizados sempre tendo em mente a perfomance do sistema. Eu utilizei o valor 12 porque é o valor utilizado na maioria das libs.

### Exercicio 2

#### a)

Devemos modificar primeiro o signup de forma que a senha gravada no banco já esteja criptografada e possamos fazer os testes na função de login.

#### d)

Não será necessário, pois este endpoint não lida diretamente com a senha do usuário. A validação nele acontece através do token informado no header da requisição.
