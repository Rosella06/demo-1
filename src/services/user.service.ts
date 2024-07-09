import { User } from "@prisma/client";
import prisma from "../configs/prisma.config";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import { HttpError } from "../error";
import { sign } from "jsonwebtoken";
import { BaseResponse } from "../models";
import { NextFunction } from "express";
dotenv.config();


export const userList = async (): Promise<User[]> => {
  try {
    return await prisma.user.findMany({
      include: {
        profile:true,
        posts: true
      }
    });
  } catch (error) {
    throw error;
  }
}

export const findUser = async (userId: number): Promise<User | null> => {
  try {
    return await prisma.user.findUnique({
      where: {
        id: userId
      }
    });
  } catch (error) {
    throw error;
  }
}

export const addUser = async (body: User): Promise<User> => {
  try {
    return await prisma.user.create({
      data: {
        username: body.username,
        password: await hashPassword(body.password),
        age: body.age,
        profile: {
          create: {
            email: "-",
            location: "-"
          }
        }
      },
      include: {
        profile: true
      }
    });
  } catch (error) {
    throw error;
  }
}

export const changeUser = async (userId: number, body: User): Promise<User> => {
  try {
    return await prisma.user.update({
      where: {
        id: userId
      },
      data: body
    });
  } catch (error) {
    throw error;
  }
}

export const removeUser = async (userId: number): Promise<User> => {
  try {
    return await prisma.user.delete({
      where: {
        id: userId
      }
    });
  } catch (error) {
    throw error;
  }
}

const hashPassword = (pass :string) => {
  return new Promise<string>((resolve,reject) =>{
  bcrypt.hash(pass,10,(err,hash) =>{
    if (err) reject(err);
    resolve(hash);
  });
});
}

export const signup = async (username: string, password: string, age: number) => {
  try {
    const hashedPassword = await hashPassword(password);
    const user = await prisma.user.create({
      data: {
        username: username,
        password: hashedPassword,
        age: age,
      },
    });

    return user;
  } catch (error) {
    throw error;
  }
};


export const checkLogin = async (userName: string, password: string) =>{
try {
  const result = await prisma.user.findUnique({
    where:{ username: userName}
  });
  if (result){
    const match = await bcrypt.compare(password, result.password);
    if(match){
      const id:number = result.id;
      const username = result.username;
      const token: string = sign ({id,username},String(process.env.JWT_SECRET));
      return{ token,id};
        } else{
          throw new HttpError(400, "Wrong user or password!!");
        }
      } else{
        throw new HttpError(400, "Wrong user or password!!");
      }
}catch (error){
  throw error; 
}
}

