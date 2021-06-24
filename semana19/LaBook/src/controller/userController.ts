import { Request, Response } from "express";
import {
  businessDoFriendship,
  businessLogin,
  businessSignup,
  businessUnDoFriendship,
} from "../business/userBusiness";
import { signupInputDTO } from "../types/user";

export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    let message = "Success!";

    const { email, password } = req.body;

    const token = await businessLogin(email, password);

    res.status(200).send({ message, token });
  } catch (error) {
    let message = error.sqlMessage || error.message;
    res.statusCode = 400;

    res.send({ message });
  }
};

export const signup = async (req: Request, res: Response) => {
  try {
    let message = "Success!";
    const input: signupInputDTO = {
      name: req.body.name,
      password: req.body.password,
      email: req.body.email,
    };

    const token = await businessSignup(input);

    res.status(201).send({ message, token });
  } catch (error) {
    res.statusCode = 400;
    let message = error.sqlMessage || error.message;

    res.send({ message });
  }
};

export const doFriendship = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const id = req.body.id;

    const token: string = req.headers.authorization as string;

    let message = await businessDoFriendship(id, token);

    res.status(200).send({ message });
  } catch (error) {
    let message = error.sqlMessage || error.message;
    res.statusCode = 400;

    res.send({ message });
  }
};

export const unDoFriendship = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const id = req.body.id;

    const token: string = req.headers.authorization as string;

    let message = await businessUnDoFriendship(id, token);

    res.status(200).send({ message });
  } catch (error) {
    let message = error.sqlMessage || error.message;
    res.statusCode = 400;

    res.send({ message });
  }
};
