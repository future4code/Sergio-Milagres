import { hash, compare } from "../services/hashManager";
import {
  deleteFriendship,
  insertFriendship,
  insertUser,
  selectFriendshipByIds,
  selectUserByEmail,
  selectUserById,
} from "../data/userDatabase";
import { generateToken, getTokenData } from "../services/authenticator";
import { generateId } from "../services/idGenerator";
import {
  User,
  signupInputDTO,
  AuthenticationData,
  Friendship,
} from "../types/user";

export const businessSignup = async (input: signupInputDTO) => {
  if (!input.name || !input.email || !input.password) {
    throw new Error('"name", "email" and "password" must be provided');
  }

  if (input.password.length < 6) {
    throw new Error("password must be at leats 6 characters");
  }

  if (input.email.indexOf("@") === -1) {
    throw new Error("Invalid Email");
  }

  const id: string = generateId();
  const cypherPassword = await hash(input.password);
  const user = {
    id,
    name: input.name,
    email: input.email,
    password: cypherPassword,
  };

  await insertUser(user);

  const token: string = generateToken({ id });

  return token;
};

export const businessLogin = async (email: string, password: string) => {
  if (!email || !password) {
    throw new Error('"email" and "password" must be provided');
  }

  const user: User = await selectUserByEmail(email);

  if (!user) {
    throw new Error("Invalid credentials");
  }

  const passwordIsCorrect: boolean = await compare(password, user.password);

  if (!passwordIsCorrect) {
    throw new Error("Invalid credentials");
  }

  const token: string = generateToken({
    id: user.id,
  });

  return token;
};

export const businessDoFriendship = async (id: string, token: string) => {
  const tokenData: AuthenticationData = getTokenData(token!);

  if (!tokenData) {
    throw new Error("Invalid token!");
  }

  const result = await selectUserById(id);

  if (result.length === 0) {
    throw new Error("User not found");
  }

  const id_friend1 = tokenData.id;
  const id_friend2 = id;

  const friendship: Friendship = {
    id_friend1,
    id_friend2,
  };

  await insertFriendship(friendship);

  return "Success!";
};

export const businessUnDoFriendship = async (id: string, token: string) => {
  const tokenData: AuthenticationData = getTokenData(token!);

  if (!tokenData) {
    throw new Error("Invalid token!");
  }

  const result = await selectUserById(id);

  if (result.length === 0) {
    throw new Error("User not found");
  }

  const id_friend1 = tokenData.id;
  const id_friend2 = id;

  const friends = await selectFriendshipByIds(id_friend1, id_friend2);
  console.log(friends);
  if (friends.length === 0) {
    throw new Error("Friendship not found");
  }

  await deleteFriendship(id_friend1, id_friend2);

  return "Success!";
};
