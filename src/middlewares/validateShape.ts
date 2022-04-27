import { NextFunction, Request, Response } from "express";
import { AnySchema } from "yup";

const validateShape =
  (shape: AnySchema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      req.validate = await shape.validate(req.body);

      return next();
    } catch (err: any) {
      return res.status(400).json({ error: err.errors });
    }
  };

export { validateShape };
