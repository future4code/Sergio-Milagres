/**************************** IMPORTS ******************************/

import express, { Express } from "express";
import cors from "cors";
import { userRouter } from "./routes/userRouter";
import { postsRouter } from "./routes/postRouter";

const app: Express = express();
app.use(express.json());
app.use(cors());

app.use("/user", userRouter);
app.use("/posts", postsRouter);

/**************************** SERVER INIT ******************************/

app.listen(3003, () => {
  console.log("Server running on port 3003");
});
