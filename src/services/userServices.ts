import { IUserInterface } from "../repository/interfaceUserRepository";
import { UserRepository } from "../repository/userRepository";

const createUserService = async (userData: IUserInterface) => {
  try {
    const user = await new UserRepository().createUser(userData);

    return user;
  } catch (e) {
    throw new Error("Error create User");
  }
};

const getUserService = async () => {
  const user = await new UserRepository().find();

  return user;
};

const updateUserService = async (userData: IUserInterface, userId: string) => {
  const user = await new UserRepository().findbyUserId(userId);

  Object.assign(user, userData);

  return await new UserRepository().updateUser(user as IUserInterface);
};

export { createUserService, getUserService, updateUserService };
