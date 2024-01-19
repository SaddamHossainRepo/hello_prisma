import { Request, Response } from "express";
import { postService } from "./post.service";
import { Prisma } from "@prisma/client";

const createPostController = async (req: Request, res: Response) => {
  try {
    const result = await postService.createPost(req.body);
    res.send({
      success: true,
      message: "Successfully created the post",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getPost = async (req: Request, res: Response) => {
  try {
    const result = await postService.getPost();
    res.send({
        success: true,
        message: "posts get successfully",
        data: result
    })
  } catch (error) {
    console.log(error)
  }
};

export const postController = {
  createPostController,
  getPost
};
