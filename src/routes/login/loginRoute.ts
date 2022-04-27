import { Express, Router } from "express";
import { loginController } from "../../controller/loginController";
import { validateShape } from "../../middlewares/validateShape";
import { loginUserShap } from "../../shapes/createUserShap";

const loginRoute = (app: Express) => {
  const login = Router();
  login.post("", validateShape(loginUserShap), loginController);

  app.use("/login", login);
};

export { loginRoute };
