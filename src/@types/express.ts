/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-namespace */

import { IUserInterface } from "../repository/interfaceUserRepository";

declare global {
  namespace Express {
    export interface Request {
      validate: IUserInterface;
    }
  }
}
