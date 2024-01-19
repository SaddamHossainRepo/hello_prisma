import { Request, Response } from "express";
import { userService } from "./user.service";

const insertIntoDB = async (req: Request, res: Response) => {
  try {
    const result = await userService.insertIntoDB(req.body);
    res.send({
      success: true,
      message: "user created successfully",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

const insertOrUpdateProfile = async (req: Request, res: Response) => {
  try {
    const result = await userService.insertOrUpdateProfile(req.body);
    res.send({
      success: true,
      message: "user created or updated successfully",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const result = await userService.getUsers();
    res.send({
      success: true,
      message: "user data fetched successfully",
      data: result,
    });
  } catch (error) {
    res.send({
      success: false,
      message: "user not found",
      data: error,
    });
  }
};

const getSingleUser = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id)
    const result = await userService.getSingleUser(id);
    res.send({
      success: true,
      message: "user data fetched successfully",
      data: result,
    });
  } catch (error) {
    res.send({
      success: false,
      message: "user not found",
      data: error,
    });
  }
};

export const userController = {
  insertIntoDB,
  getAllUsers,
  getSingleUser,
  insertOrUpdateProfile,
};
