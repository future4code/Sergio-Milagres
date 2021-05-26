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

// Exercício 1

/* a) Ao usar o raw, a resposta do banco inclui informações extras além das contidas nas linhas da tabela. Essas informações são enviadas em um segundo array, tornando a resposta em um grande array composto de dois outros arrays. No primeiro array filho estão as informações dos elementos (os que queremos) e no segundo array filho, as informações complementares que, neste caso, podemos ignorar. */

// b)
const searchActor = async (name: string): Promise<any> => {
  const result = await connection.raw(`
      SELECT * FROM Actor WHERE name = "${name}"
    `);
  return result;
};

// c)
const countActors = async (gender: string): Promise<any> => {
  const result = await connection.raw(`
      SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
    `);
  const count = result.count;
  return count;
};

// Exercício 2

// a)
const updateActor = async (id: string, salary: number): Promise<any> => {
  await connection("Actor")
    .update({
      salary: salary,
    })
    .where("id", id);
};

// b)
const deleteActor = async (id: string): Promise<any> => {
  await connection("Actor").delete().where("id", id);
};

// c)
const avgSalary = async (gender: string): Promise<any> => {
  const result = await connection("Actor")
    .avg("salary as average")
    .where("gender", gender);

  return result[0].average;
};

// Exercício 3

// a)
const getActorById = async (id: string): Promise<any> => {
  const result = await connection.raw(`
      SELECT * FROM Actor WHERE id = "${id}"
    `);
  return result[0];
};

app.get("/actor/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const actor = await getActorById(id);

    res.status(200).send(actor);
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});

// b)
app.get("/actor/search", async (req: Request, res: Response) => {
  try {
    const gender: string = req.query.gender as string;
    const totalGender = await countActors(gender);

    res.status(200).send(totalGender[0]);
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
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
