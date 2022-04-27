import * as yup from "yup";
import { hashSync } from "bcrypt";

const createUserShap = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup
    .string()
    .transform((pwd) => hashSync(pwd, 10))
    .required(),
});

const updateUserShap = yup.object().shape({
  name: yup.string().required(),
});

const loginUserShap = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

export { createUserShap, updateUserShap, loginUserShap };
