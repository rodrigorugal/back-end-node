import { Request, Response } from "express";
import {
  createUserService,
  getUserService,
  updateUserService,
} from "../services/userServices";

const createUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const userData = req.validate;
    const user = await createUserService(userData);
    return res.json(user);
  } catch (error: unknown) {
    if (error instanceof Error) {
      return res.status(400).json({
        message: error.message || "Unexpected error.",
      });
    }
    return res.status(500).json({ Error: "Unexpected error." });
  }
};

const getUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const user = await getUserService();
    return res.json(user);
  } catch (error: unknown) {
    if (error instanceof Error) {
      return res.status(400).json({
        message: error.message || "Unexpected error.",
      });
    }
    return res.status(500).json({ Error: "Unexpected error." });
  }
};

const updateUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const userData = req.validate;
    const user = await updateUserService(userData, req.params.id);
    return res.json(user);
  } catch (error: unknown) {
    if (error instanceof Error) {
      return res.status(400).json({
        message: error.message || "Unexpected error.",
      });
    }
    return res.status(500).json({ Error: "Unexpected error." });
  }
};

export { createUserController, getUserController, updateUserController };
