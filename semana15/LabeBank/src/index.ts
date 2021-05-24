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
      { value: 45.90, date: "19/05/2021", description: "Netflix" },
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
      { value: 215.90, date: "21/05/2021", description: "Shopping" },
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
      { value: 139.40, date: "19/05/2021", description: "Epic Games" },
      { value: 387.12, date: "22/05/2021", description: "Kabum" },
    ],
  },
];

// Servidor
app.listen(3003, () => {
  console.log("Servidor rodando na porta 3003");
});
