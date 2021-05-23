import express, { Express, Request, Response } from "express";
import cors from "cors";

const app: Express = express();
app.use(express.json());
app.use(cors());

// Servidor
app.listen(3003, () => {
  console.log("Servidor rodando na porta 3003");
});
