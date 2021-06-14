import { hash } from "../services/hashManager";
import { insertUser } from "../data/userDatabase";
import { generateToken } from "../services/authenticator";
import { generateId } from "../services/idGenerator";
import { USER_ROLES } from "../types/user";

export const businessSignup = async (
  name: string,
  email: string,
  password: string,
  role: USER_ROLES
) => {
  if (!name || !email || !password || !role) {
    throw new Error(
      'Os campos "name", "email", "password", e "role" devem ser informados!'
    );
  }

  if (password.length < 6) {
    throw new Error("Sua senha precisa ter no mínimo 6 caracteres");
  }

  if (email.indexOf("@") === -1) {
    throw new Error("Email Inválido");
  }

  if (role !== USER_ROLES.ADMIN && role !== USER_ROLES.NORMAL) {
    throw new Error(`O campo "role" deve ser "NORMAL" ou "ADMIN"`);
  }

  const id: string = generateId();

  const cypherPassword = await hash(password);

  await insertUser({
    id,
    name,
    email,
    password: cypherPassword,
    role,
  });

  const token: string = generateToken({
    id,
    role: role,
  });

  return token;
};
