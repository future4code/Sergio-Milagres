import express from "express";
import knex from "knex";
import cors from "cors";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import createUser from "./endpoints/createUser";
import login from "./endpoints/login";
import getUserByToken from "./endpoints/getUserByToken";
import getUserById from "./endpoints/getUserById";

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

app.post("/signup", createUser);
app.post("/login", login);
app.get("/user/:id", getUserById);
app.get("/user/profile", getUserByToken);

// Servidor
const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
