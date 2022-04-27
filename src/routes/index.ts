import { Express } from "express";
import { loginRoute } from "./login/loginRoute";
import userRoutes from "./users/userRoutes";

const routes = (app: Express) => {
  userRoutes(app);
  loginRoute(app);
};

export default routes;
