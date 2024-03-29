import express, { Express, Request, Response } from "express";
import knex from "knex";
import cors from "cors";
import dotenv from "dotenv";
import { AddressInfo } from "net";

dotenv.config();

export const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  },
});

const app: Express = express();
app.use(express.json());
app.use(cors());

type user = {
  name: string;
  nickname: string;
  email: string;
};

type task = {
  title: string;
  description: string;
  limit_date: string;
  creator_user_id: number;
};

const createUser = async (
  name: string,
  nickname: string,
  email: string
): Promise<void> => {
  await connection
    .insert({
      name: name,
      nickname: nickname,
      email: email,
    })
    .into("TodoListUser");
};

const createTask = async (
  title: string,
  description: string,
  limit_date: string,
  creator_user_id: number
): Promise<void> => {
  await connection
    .insert({
      title: title,
      description: description,
      limit_date: limit_date,
      creator_user_id: creator_user_id,
    })
    .into("TodoListTask");
};

const getUserById = async (id: number): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM TodoListUser WHERE id = "${id}"
  `);

  return result[0];
};

const updateUser = async (
  id: number,
  name: string,
  nickname: string,
  email: string
): Promise<any> => {
  await connection("TodoListUser")
    .update({
      name: name,
      nickname: nickname,
      email: email,
    })
    .where("id", id);
};

// 1. Criar usuário
app.post("/user", async (req: Request, res: Response) => {
  const userData: user = {
    name: req.body.name,
    nickname: req.body.nickname,
    email: req.body.email,
  };

  if (!userData.name || !userData.nickname || !userData.email) {
    throw new Error("Verifique os dados informados e tente novamente.");
  }

  try {
    await createUser(req.body.name, req.body.nickname, req.body.email);

    res.status(200).send("Usuário criado com sucesso!");
  } catch (error) {
    res.status(422).send({ message: error.message });
  }
});

// 2. Pegar usuário pelo id
app.get("/user/:id", async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const user = await getUserById(id);

    if (user[0] === undefined) {
      throw new Error("Usuário não encontrado");
    }

    res.status(200).send(user[0]);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
});

// 3. Editar usuário
app.post("/user/:id", async (req: Request, res: Response) => {
  const id: number = Number(req.params.id);
  const user = await getUserById(id);
  const userData: user = {
    name: req.body.name,
    nickname: req.body.nickname,
    email: req.body.email,
  };
  let errorCode: number = 400;

  if (user[0] === undefined) {
    errorCode = 404;
    throw new Error("Usuário não encontrado");
  }

  if (!userData.name || !userData.nickname || !userData.email) {
    errorCode = 422;
    throw new Error("Verifique os dados informados e tente novamente.");
  }

  try {
    await updateUser(id, userData.name, userData.nickname, userData.email);
    res.status(200).send("Usuário atualizado com sucesso!");
  } catch (error) {
    res.status(errorCode).send({ message: error.message });
  }
});

// 4. Criar tarefa
app.put("/task", async (req: Request, res: Response) => {
  const taskData: task = {
    title: req.body.title,
    description: req.body.description,
    limit_date: req.body.limit_date,
    creator_user_id: Number(req.body.creator_user_id),
  };

  if (
    !taskData.title ||
    !taskData.description ||
    !taskData.limit_date ||
    !taskData.creator_user_id
  ) {
    throw new Error("Verifique os dados informados e tente novamente.");
  }

  try {
    await createTask(
      taskData.title,
      taskData.description,
      taskData.limit_date,
      taskData.creator_user_id
    );

    res.status(200).send("Tarefa criada com sucesso!");
  } catch (error) {
    res.status(422).send({ message: error.message });
  }
});

// Servidor
const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
