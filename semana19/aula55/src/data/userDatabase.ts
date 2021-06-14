import { connection } from "..";
import { user } from "../types/user";

export const insertUser = async (user: user) => {
  await connection
    .insert({
      id: user.id,
      name: user.name,
      email: user.email,
      password: user.password,
      role: user.role,
    })
    .into("Camadas_User");
};
