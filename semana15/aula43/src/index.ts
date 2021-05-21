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

// Endpoint 3)
app.get("/countries/search", (req: Request, res: Response) => {
  let result: country[] = countries;

  if (req.query.name || req.query.capital || req.query.continent) {
    if (req.query.name) {
      result = result.filter((country) =>
        country.name.includes(req.query.name as string)
      );
    }

    if (req.query.capital) {
      result = result.filter((country) =>
        country.capital.includes(req.query.capital as string)
      );
    }

    if (req.query.continent) {
      result = result.filter((country) =>
        country.continent.includes(req.query.continent as string)
      );
    }

    res.status(200).send(result);
  } else {
    res.status(400).send("Invalid Parameters");
  }
});

app.listen(3003, () => {
  console.log("Servidor rodando na porta 3003");
});
