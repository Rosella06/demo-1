import { NextFunction, Request, Response } from "express";
import { BaseResponse } from "../models";
import { addPost, changePost, findPost, removePost, postList } from "../services";
import { Post } from "@prisma/client";

export const getPost = async (req: Request, res: Response<BaseResponse<Post[]>>, next: NextFunction) => {
  try {
    res.status(200).json({
      message: 'Successful',
      success: true,
      data: await postList()
    });
  } catch (error) {
    next(error);
  }
}

export const getPostById = async (req: Request, res: Response<BaseResponse<Post | null>>, next: NextFunction) => {
  try {
    res.status(200).json({
      message: 'Successful',
      success: true,
      data: await findPost(Number(req.params.id))
    });
  } catch (error) {
    next(error);
  }
}

export const createPost = async (req: Request, res: Response<BaseResponse<Post>>, next: NextFunction) => {
  try {
    res.status(201).json({
      message: 'Successful',
      success: true,
      data: await addPost(req.body as Post)
    });
  } catch (error) {
    next(error);
  }
}

export const updatePost = async (req: Request, res: Response<BaseResponse<Post>>, next: NextFunction) => {
  try {
    res.status(200).json({
      message: 'Successful',
      success: true,
      data: await changePost(Number(req.params.id), req.body as Post)
    });
  } catch (error) {
    next(error);
  }
}

export const deletePost = async (req: Request, res: Response<BaseResponse<Post>>, next: NextFunction) => {
  try {
    res.status(200).json({
      message: 'Successful',
      success: true,
      data: await removePost(Number(req.params.id))
    });
  } catch (error) {
    next(error);
  }
}
