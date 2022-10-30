import { getMe, login, register } from "./controllers/UserController.js";

import checkAuth from "./utils/checkAuth.js";
import express from "express";
import mongoose from "mongoose";
import { registerValidation } from "./validations/auth.js";

mongoose
  .connect(
    "mongodb+srv://alexeybelyaevv:hqv722hd52vt@cluster0.hziziy0.mongodb.net/blog?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("DB OK");
  })
  .catch((err) => console.log("DB ERROR", err));

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 4444;

app.post("/auth/login", login);
app.post("/auth/register", registerValidation, register);
app.get("/auth/me", checkAuth, getMe);

app.listen(PORT, (err) => {
  if (err) {
    return console.log(err.message);
  } else {
    return console.log(`Server is running on port ${PORT}`);
  }
});
