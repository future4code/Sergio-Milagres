import express from "express";
import cors from "cors";
import { userRouter } from "./routes/userRouter";
import { taskRouter } from "./routes/taskRouter";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/user", userRouter);
app.use("/task", taskRouter);

app.listen(3006, () => {
  console.log("Servidor rodando na porta 3006");
});
