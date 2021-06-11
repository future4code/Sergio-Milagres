import { connection } from "..";
import { USER_ROLES } from "../types/user";

export type User = {
  id: string;
  name: string;
  nickname: string;
  email: string;
  password: string;
  role: USER_ROLES;
};

export default async function selectUserByEmail(email: string): Promise<User> {
  try {
    const result = await connection("User").select("*").where({ email });

    return {
      id: result[0].id,
      name: result[0].name,
      nickname: result[0].nickname,
      email: result[0].email,
      password: result[0].password,
      role: result[0].role,
    };
  } catch (error) {
    throw new Error(error.slqMessage || error.message);
  }
}
