import { Request, Response } from "express";
import { loginService } from "../services/loginService";

const loginController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { email, password } = req.validate;

    const token = await loginService(email, password);

    return res.json({ token });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return res.status(400).json({
        message: error.message || "Unexpected error.",
      });
    }
    return res.status(500).json({ Error: "Unexpected error." });
  }
};

export { loginController };
