import express, { Express, Request, Response } from "express";
import cors from "cors";
import { countries, country } from "./countries";

const app: Express = express();

app.use(express.json());
app.use(cors());

// Endpoint 1)
app.get("/countries/all", (req: Request, res: Response) => {
  const result = countries.map((c: country) => ({
    id: c.id,
    name: c.name,
  }));

  res.status(200).send(result);
});

// Endpoint 2)
app.get("/countries/:id", (req: Request, res: Response) => {
  const result: country | undefined = countries.find(
    (country) => country.id === Number(req.params.id)
  );

  if (result) {
    res.status(200).send(result);
  } else {
    res.status(404).send("Not found");
  }
});

app.listen(3003, () => {
  console.log("Servidor rodando na porta 3003");
});
