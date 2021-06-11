import * as bcrypt from "bcryptjs";
import dotenv from "dotenv";

dotenv.config();

export function hash(plainText: string): string {
  const rounds: number = Number(process.env.BCRYPT_COST);
  const salt: string = bcrypt.genSaltSync(rounds);
  const cypherText: string = bcrypt.hashSync(plainText, salt);

  return cypherText;
}

export function compare(plainText: string, cypherText: string): boolean {
  return bcrypt.compareSync(plainText, cypherText);
}
