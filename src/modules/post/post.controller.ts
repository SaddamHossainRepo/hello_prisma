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

const getAllPosts = async (req: Request, res: Response) => {
  try {
    const result = await postService.getAllPost();
    res.send({
      success: true,
      message: "posts fetched successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getSinglePost = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const result = await postService.getSinglePost(id);
    console.log(result);
    res.send({
      success: true,
      message: "post get successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const postController = {
  createPostController,
  getAllPosts,
  getSinglePost,
};
