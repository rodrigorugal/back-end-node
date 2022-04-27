interface IUserInterface {
  id: string;
  name: string;
  email: string;
  password: string;
}

interface IUserRepository {
  createUser: (user: IUserInterface) => Promise<IUserInterface>;
  find: () => Promise<IUserInterface[]>;
  findbyUserId: (id: string) => Promise<IUserInterface | undefined>;
  findByEmail: (email: string) => Promise<IUserInterface | undefined>;
}

export { IUserInterface, IUserRepository };
