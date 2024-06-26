import { NextFunction, Request, Response } from "express";
import { BaseResponse } from "../models";
import { addProfile, changeProfile, findProfile, removeProfile, profileList } from "../services";
import { Profile } from "@prisma/client";

export const getProfile = async (req: Request, res: Response<BaseResponse<Profile[]>>, next: NextFunction) => {
  try {
    res.status(200).json({
      message: 'Successful',
      success: true,
      data: await profileList()
    });
  } catch (error) {
    next(error);
  }
}

export const getProfileById = async (req: Request, res: Response<BaseResponse<Profile | null>>, next: NextFunction) => {
  try {
    res.status(200).json({
      message: 'Successful',
      success: true,
      data: await findProfile(Number(req.params.id))
    });
  } catch (error) {
    next(error);
  }
}

export const createProfile = async (req: Request, res: Response<BaseResponse<Profile>>, next: NextFunction) => {
  try {
    res.status(201).json({
      message: 'Successful',
      success: true,
      data: await addProfile(req.body as Profile)
    });
  } catch (error) {
    next(error);
  }
}

export const updateProfile = async (req: Request, res: Response<BaseResponse<Profile>>, next: NextFunction) => {
  try {
    res.status(200).json({
      message: 'Successful',
      success: true,
      data: await changeProfile(Number(req.params.id), req.body as Profile)
    });
  } catch (error) {
    next(error);
  }
}

export const deleteProfile = async (req: Request, res: Response<BaseResponse<Profile>>, next: NextFunction) => {
  try {
    res.status(200).json({
      message: 'Successful',
      success: true,
      data: await removeProfile(Number(req.params.id))
    });
  } catch (error) {
    next(error);
  }
}
