import { body } from "express-validator";

export const registerValidation = [
  body("email", "Email is not correct").isEmail(),
  body("password", "Min. length of password is 5 symbols").isLength({ min: 5 }),
  body("fullName", "Min. length of name is 2 symbols").isLength({ min: 2 }),
  body("avatarUrl", "Not correct url").optional().isURL(),
];

export const loginValidation = [
  body("email", "Email is not correct").isEmail(),
  body("password", "Min. length of password is 5 symbols").isLength({ min: 5 }),
];

export const postValidation = [
  body("title", "Min. length of title is 1 symbol").isLength({ min: 1 }),
  body("text", "Min. length of text is 2 symbols")
    .optional()
    .isLength({ min: 2 }),
  body("imageUrl", "Not correct url").optional().isURL(),
  body("tags", "Not correct format").optional().isString(),
];
