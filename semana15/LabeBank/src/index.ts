import express, { Express, Request, Response } from "express";
import cors from "cors";

const app: Express = express();
app.use(express.json());
app.use(cors());

type user = {
  id: number;
  name: string;
  cpf: string;
  birth: string;
  balance: number;
  expenses: transaction[];
};

type transaction = {
  value: number;
  date: string;
  description: string;
};

let users: user[] = [
  {
    id: 1,
    name: "Sérgio Henrique Nery Figorelle",
    cpf: "83763828028",
    birth: "21/09/1996",
    balance: 2385.83,
    expenses: [
      { value: 122.74, date: "17/05/2021", description: "Conta de Internet" },
      { value: 23, date: "21/05/2021", description: "Almoço" },
    ],
  },
  {
    id: 2,
    name: "Raquel Isabelly Sales",
    cpf: "85570408657",
    birth: "24/01/1953",
    balance: 3607.39,
    expenses: [
      { value: 485.89, date: "21/05/2021", description: "Supermercado" },
      { value: 95.07, date: "22/05/2021", description: "Roupas" },
    ],
  },
  {
    id: 3,
    name: "Jéssica Helena da Rocha",
    cpf: "77346822439",
    birth: "25/05/1988",
    balance: 4524.97,
    expenses: [
      { value: 179.17, date: "18/05/2021", description: "Assinatura de TV" },
      { value: 45.9, date: "19/05/2021", description: "Netflix" },
    ],
  },
  {
    id: 4,
    name: "Nathan Francisco Brito",
    cpf: "68797562807",
    birth: "07/06/1985",
    balance: 3703.5,
    expenses: [
      { value: 489.47, date: "17/05/2021", description: "Americanas.com" },
      { value: 215.9, date: "21/05/2021", description: "Shopping" },
    ],
  },
  {
    id: 5,
    name: "Ian Henrique Carvalho",
    cpf: "06633371780",
    birth: "05/03/1992",
    balance: 3157.58,
    expenses: [
      { value: 282.94, date: "18/05/2021", description: "Conta de Luz" },
      { value: 99.85, date: "20/05/2021", description: "Conta de Internet" },
    ],
  },
  {
    id: 6,
    name: "Arthur Nicolas Assunção",
    cpf: "63952472476",
    birth: "06/04/1994",
    balance: 4127.68,
    expenses: [
      { value: 139.4, date: "19/05/2021", description: "Epic Games" },
      { value: 387.12, date: "22/05/2021", description: "Kabum" },
    ],
  },
];

// Endpoint de cadastro de usuário e conta
app.post("/user", (req: Request, res: Response) => {
  let errorCode: number = 400;

  try {
    const yearNow: number = new Date().getFullYear();
    const monthNow: number = new Date().getMonth() + 1;
    const dayNow: number = new Date().getDate();
    const birth: string = req.body.birth;
    const birthDay: number = Number(birth.substring(0, 2));
    const birthMonth: number = Number(birth.substring(3, 5));
    const birthYear: number = Number(birth.substring(6, 10));

    const reqBody: user = {
      id: Date.now(),
      name: req.body.name,
      cpf: req.body.cpf,
      birth: req.body.birth,
      balance: 0,
      expenses: [],
    };

    if (!reqBody.cpf || !reqBody.birth || !reqBody.name) {
      errorCode = 422;
      throw new Error("Algum campo está inválido. Preencha corretamente.");
    }

    // Validação de CPF existente
    const myUserIndex = users.findIndex((u: user) => u.cpf === reqBody.cpf);

    if (myUserIndex > -1) {
      errorCode = 409;
      throw new Error("Número de CPF já existente!");
    }

    // Validação de idade mínima de 18 anos
    if (yearNow - birthYear < 18) {
      errorCode = 401;
      throw new Error("Idade insuficiente para abertura de conta!");
    } else {
      if (yearNow - birthYear === 18) {
        if (monthNow < birthMonth) {
          errorCode = 401;
          throw new Error("Idade insuficiente para abertura de conta!");
        } else {
          if (monthNow === birthMonth) {
            if (dayNow < birthDay) {
              errorCode = 401;
              throw new Error("Idade insuficiente para abertura de conta!");
            }
          }
        }
      }
    }

    users.push(reqBody);

    res
      .status(200)
      .send({ message: "Conta Criada com sucesso! Bem vindo ao F4Bank!" });
  } catch (error) {
    res.status(errorCode).send({ message: error.message });
  }
});

// Endpoint para Pegar Saldo
app.get("/user/:cpf", (req: Request, res: Response) => {
  let errorCode: number = 400;

  try {
    if (!req.params.cpf) {
      errorCode = 422;
      throw new Error("CPF inválido. Preencha corretamente.");
    }

    const myUser = users.find((u: user) => u.cpf === req.params.cpf);
    if (!myUser) {
      errorCode = 404;
      throw new Error("Usuário não encontrado");
    }

    const result = {
      id: myUser.id,
      name: myUser.name,
      cpf: myUser.cpf,
      Saldo: myUser.balance,
    };

    res.status(200).send(result);
  } catch (error) {
    res.status(errorCode).send({ message: error.message });
  }
});

// Servidor
app.listen(3003, () => {
  console.log("Servidor rodando na porta 3003");
});
