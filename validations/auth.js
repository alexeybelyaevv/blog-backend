import { body } from "express-validator";

export const registerValidation = [
  body("email", "Email is not correct").isEmail(),
  body("password", "Min. length of password is 5 symbols").isLength({ min: 5 }),
  body("fullName", "Min. length of name is 2 symbols").isLength({ min: 2 }),
  body("avatarUrl", "Not correct url").optional().isURL(),
];
