import { compare } from "bcryptjs";

export const verifyPassword = async (password: string, hashedPassword: string) => {
  return await compare(password, hashedPassword);
}
