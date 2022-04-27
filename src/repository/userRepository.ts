import { getRepository, Repository } from "typeorm";
import { User } from "../entities/User";
import { IUserInterface, IUserRepository } from "./interfaceUserRepository";

export class UserRepository implements IUserRepository {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User);
  }

  createUser = async (user: IUserInterface) => this.ormRepository.save(user);

  find = async () => this.ormRepository.find();

  findbyUserId = async (id: string) =>
    this.ormRepository
      .createQueryBuilder("user")
      .where("user.id = :id", { id: id })
      .getOne();

  findByEmail = async (email: string) =>
    this.ormRepository
      .createQueryBuilder("user")
      .where("user.email = :email", { email: email })
      .addSelect("user.password")
      .getOne();

  updateUser = async (user: IUserInterface) => this.ormRepository.save(user);
}
