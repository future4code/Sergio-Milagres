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

// Exercício 4)
app.post("/user", (req: Request, res: Response) => {
  let errorCode: number = 400;

  try {
    const reqBody: User = {
      id: Date.now(),
      name: req.body.name,
      email: req.body.email,
      type: req.body.type,
      age: req.body.age,
    };

    if (!reqBody.age || !reqBody.email || !reqBody.type || !reqBody.name) {
      errorCode = 422;
      throw new Error("Algum campo está inválido. Preencha corretamente.");
    }

    users.push(reqBody);

    res.status(200).send({ message: "Usuário inserido com sucesso!" });
  } catch (error) {
    res.status(errorCode).send({ message: error.message });
  }
});

// a)
app.put("/user", (req: Request, res: Response) => {
  let errorCode: number = 400;

  try {
    const reqBody: User = {
      id: Date.now(),
      name: req.body.name,
      email: req.body.email,
      type: req.body.type,
      age: req.body.age,
    };

    if (!reqBody.age || !reqBody.email || !reqBody.type || !reqBody.name) {
      errorCode = 422;
      throw new Error("Algum campo está inválido. Preencha corretamente.");
    }

    users.push(reqBody);

    res.status(200).send({ message: "Usuário inserido com sucesso!" });
  } catch (error) {
    res.status(errorCode).send({ message: error.message });
  }
});

// Para esta API nada mudou, aparentemente funcionou da mesma forma.

// b) A julgar por esta situação e pelo que fiz até agora, diria que sim, funciona normalmente. Porém, existem diferenças entre os métodos em termos de registro de atividade.

// Exercício 5)
app.put("/user/:id", (req: Request, res: Response) => {
  let errorCode: number = 400;

  try {
    const reqBody: { id: number; name: string } = {
      id: Number(req.params.id),
      name: req.body.name,
    };

    if (!reqBody.name) {
      errorCode = 422;
      throw new Error("Nome inválido. Preencha corretamente.");
    }

    if (isNaN(Number(reqBody.id))) {
      errorCode = 422;
      throw new Error("Id inválido");
    }

    const myUserIndex = users.findIndex(
      (u: User) => u.id === Number(reqBody.id)
    );

    if (myUserIndex === -1) {
      errorCode = 404;
      throw new Error("Usuário não encontrado");
    }

    users[myUserIndex].name = reqBody.name;

    res.status(200).send({ message: "Usuário atualizado com sucesso!" });
  } catch (error) {
    res.status(errorCode).send({ message: error.message });
  }
});

// Exercício 6)
app.patch("/user/:id", (req: Request, res: Response) => {
  let errorCode: number = 400;

  try {
    const reqBody: { id: number; name: string } = {
      id: Number(req.params.id),
      name: req.body.name,
    };

    if (!reqBody.name) {
      errorCode = 422;
      throw new Error("Nome inválido. Preencha corretamente.");
    }

    if (isNaN(Number(reqBody.id))) {
      errorCode = 422;
      throw new Error("Id inválido");
    }

    const myUserIndex = users.findIndex(
      (u: User) => u.id === Number(reqBody.id)
    );

    if (myUserIndex === -1) {
      errorCode = 404;
      throw new Error("Usuário não encontrado");
    }

    users[myUserIndex].name = reqBody.name;

    res.status(200).send({ message: "Usuário atualizado com sucesso!" });
  } catch (error) {
    res.status(errorCode).send({ message: error.message });
  }
});

// Exercício 7)
app.delete("/user/:id", (req: Request, res: Response) => {
  let errorCode: number = 400;

  try {
    if (!req.headers.authorization) {
      errorCode = 401;
      throw new Error("Usuário não autorizado!");
    }

    const userIndex: number = users.findIndex(
      (user) => user.id === Number(req.params.id)
    );

    if (userIndex === -1) {
      errorCode = 404;
      throw new Error("Usuário não encontrado");
    }

    users.splice(userIndex, 1);

    res.status(200).send({ message: "Usuário apagado com sucesso!" });
  } catch (error) {
    res.status(errorCode).send({ message: error.message });
  }
});

// Servidor
app.listen(3003, () => {
  console.log("Server is running at port 3003");
});
