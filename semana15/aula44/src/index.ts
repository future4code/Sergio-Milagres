import express, { Request, Response } from "express";
import cors from "cors";

type User = {
  id: number;
  name: string;
  email: string;
  type: UserType;
  age: number;
};

enum UserType {
  ADMIN = "ADMIN",
  NORMAL = "NORMAL",
}

// Mock simulando um array de usuários no Banco de Dados
let users: User[] = [
  {
    id: 1,
    name: "Alice",
    email: "alice@email.com",
    type: UserType.ADMIN,
    age: 12,
  },
  {
    id: 2,
    name: "Bob",
    email: "bob@email.com",
    type: UserType.NORMAL,
    age: 36,
  },
  {
    id: 3,
    name: "Coragem",
    email: "coragem@email.com",
    type: UserType.NORMAL,
    age: 21,
  },
  {
    id: 4,
    name: "Dory",
    email: "dory@email.com",
    type: UserType.NORMAL,
    age: 17,
  },
  {
    id: 5,
    name: "Elsa",
    email: "elsa@email.com",
    type: UserType.ADMIN,
    age: 17,
  },
  {
    id: 6,
    name: "Fred",
    email: "fred@email.com",
    type: UserType.ADMIN,
    age: 60,
  },
];

const app = express();
app.use(express.json());
app.use(cors());

// Exercício 1)
app.get("/user", (req: Request, res: Response) => {
  const result = users.map((user) => ({
    id: user.id,
    name: user.name,
  }));

  res.status(200).send(result);
});

// a) Método GET
// b) Entidade User

// Exercício 2)
app.get("/user/search", (req: Request, res: Response) => {
  let errorCode: number = 400;

  try {
    const type: string = req.query.type as string;

    if (!type) {
      errorCode = 422;
      throw new Error("Tipo inválido. Por favor preencha corretamente");
    }

    let result = users.filter((user) =>
      user.type.includes(req.query.type as string)
    );

    if (result.length === 0) {
      errorCode = 422;
      throw new Error("Tipo inválido. Por favor preencha corretamente");
    }

    res.status(200).send(result);
  } catch (error) {
    res.status(errorCode).send(error.message);
  }
});

// a) Os parâmetros foram passados ​​por QueryParams. Porque seria necessário buscar um termo específico que pudesse aparecer em mais de um elemento do banco de dados.
// b) o enum foi usado para definir os tipos válidos para a chave type. Além disso, foram feitas validações com estruturas IF para garantir que mensagens de erro sejam exibidas se o usuário não digitar nada ou digitar um tipo inválido.

// Exercício 3)
app.get("/user/byname/search", (req: Request, res: Response) => {
  let errorCode: number = 400;
  try {
    const name: string = req.query.name as string;

    if (!name) {
      errorCode = 422;
      throw new Error("Nome inválido. Por favor preencha corretamente");
    }

    const myUser = users.find(
      (u: User) => u.name.toLowerCase() === name.toLowerCase()
    );
    if (!myUser) {
      errorCode = 404;
      throw new Error("Usuário não encontrado"); // b)
    }

    const result = myUser;
    res.status(200).send(result);
  } catch (error) {
    res.status(errorCode).send(error.message);
  }
});

// a) Os parâmetros foram enviados ​​por QueryParams, pois seria necessário buscar um termo específico que não é necessariamente único.

app.listen(3003, () => {
  console.log("Server is running at port 3003");
});
