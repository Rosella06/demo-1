import { NextFunction, Request, Response } from "express";
import { BaseResponse, ZUser } from "../models";
import { addUser, changeUser, findUser, removeUser, userList, checkLogin, signup} from "../services";
import { User } from "@prisma/client";
import { z } from "zod";
import { HttpError, ValidationError } from "../error";
import { fromZodError } from "zod-validation-error";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import prisma from "../configs/prisma.config";

export const getUser = async (req: Request, res: Response<BaseResponse<User[]>>, next: NextFunction) => {
  try {
    res.status(200).json({
      message: 'Successful',
      success: true,
      data: await userList()
    });
  } catch (error) {
    next(error);
  }
}

export const getUserById = async (req: Request, res: Response<BaseResponse<User | null>>, next: NextFunction) => {
  try {
    res.status(200).json({
      message: 'Successful',
      success: true,
      data: await findUser(Number(req.params.id))
    });
  } catch (error) {
    next(error);
  }
}

export const createUser = async (req: Request, res: Response<BaseResponse<User>>, next: NextFunction) => {
  try {
    const body = ZUser.parse(req.body);
    res.status(201).json({
      message: 'Successful',
      success: true,
      data: await addUser(body as User)
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      next(new ValidationError(fromZodError(error).toString()));
    } else if (error instanceof PrismaClientKnownRequestError) {
      next(new HttpError(400, `${error.name} : ${error.code}`));
    } else {
      next(error);
    }
  }
}

export const updateUser = async (req: Request, res: Response<BaseResponse<User>>, next: NextFunction) => {
  try {
    res.status(200).json({
      message: 'Successful',
      success: true,
      data: await changeUser(Number(req.params.id), req.body as User)
    });
  } catch (error) {
    next(error);
  }
}

export const deleteUser = async (req: Request, res: Response<BaseResponse<User>>, next: NextFunction) => {
  try {
    res.status(200).json({
      message: 'Successful',
      success: true,
      data: await removeUser(Number(req.params.id))
    });
  } catch (error) {
    next(error);
  }
}

export const login = async (req: Request, res:Response<BaseResponse>, next : NextFunction)=>{
  try {
    res.status(200).json({
      message: 'Successful',
      success: true,
      data: await checkLogin(req.body.username, req.body.password)
    });
  } catch (error) {
    next(error);
  }
}

export const adduser = async (req: Request, res:Response<BaseResponse>, next : NextFunction)=>{
  try {
    res.status(200).json({
      message: 'Successful',
      success: true,
      data: await signup(req.body.username, req.body.password,req.body.age)
    });
  } catch (error) {
    next(error);
  }
}
