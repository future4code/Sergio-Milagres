import { connection } from "../index";

export const addUser = async (id: string, email: string, password: string) => {
  await connection
    .insert({
      id,
      email,
      password,
    })
    .into("User");
};
