import { Express, Router } from "express";
import {
  createUserController,
  getUserController,
  updateUserController,
} from "../../controller/userController";
import validateAuthToken from "../../middlewares/validateAuthToken";
import { validateShape } from "../../middlewares/validateShape";
import { createUserShap, updateUserShap } from "../../shapes/createUserShap";

const userRoutes = (app: Express) => {
  const userRoute = Router();

  userRoute.post(
    "/register",
    validateShape(createUserShap),
    createUserController
  );

  userRoute.get("/", getUserController);

  userRoute.patch("/:id", validateShape(updateUserShap), updateUserController);

  app.use("/user", userRoute);
};

export default userRoutes;
