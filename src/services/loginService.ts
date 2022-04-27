import { UserRepository } from "../repository/userRepository";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { IUserInterface } from "../repository/interfaceUserRepository";

const loginService = async (email: string, password: string) => {
  const user = (await new UserRepository().findByEmail(
    email
  )) as IUserInterface;

  if (!user) {
    throw new Error("User not found");
  }
  const matches = await bcrypt.compareSync(password, user.password);

  if (!matches) {
    throw new Error("Error Password");
  }
  const token = jwt.sign({ email: user.email }, "bubbjklbbblvzkdb", {
    expiresIn: "1h",
  });

  return token;
};

export { loginService };
