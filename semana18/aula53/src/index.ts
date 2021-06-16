import express from "express";
import knex from "knex";
import cors from "cors";
import dotenv from "dotenv";
import createUser from "./endpoints/createUser";
import login from "./endpoints/login";
import editUser from "./endpoints/editUser";
import { AddressInfo } from "net";

dotenv.config();

export const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT || "3306"),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
});

const app = express();
app.use(express.json());
app.use(cors());

app.post("/user/signup", createUser);
app.post("/user/login", login);
app.put("/user/edit", editUser);

// Servidor
const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
