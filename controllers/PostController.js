import PostModel from "../models/Post.js";
import { validationResult } from "express-validator";

export const createPost = async (req, res) => {
  try {
    const doc = new PostModel({
      title: req.body.title,
      text: req.body.text,
      imageUrl: req.body.imageUrl,
      tags: req.body.tags,
      user: req.userId,
    });
    const post = await doc.save();
    return res.status(201).json(post);
  } catch (err) {
    console.log(err);
    return res.status(400);
  }
};
