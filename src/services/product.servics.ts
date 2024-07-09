import { tbl_product } from "@prisma/client";
import prisma from "../configs/prisma.config";

export const productList = async (): Promise<tbl_product[]> => {
  try {
    return await prisma.tbl_product.findMany();
  } catch (error) {
    throw error;
  }
}

export const findProduct = async (productId: number): Promise<tbl_product | null> => {
  try {
    return await prisma.tbl_product.findUnique({
      where: {
        p_id: productId
      }
    });
  } catch (error) {
    throw error;
  }
}

export const addProduct = async (body: tbl_product): Promise<tbl_product> => {
  try {
    return await prisma.tbl_product.create({
      data: body
    });
  } catch (error) {
    throw error;
  }
}

export const changeProduct = async (productId: number, body: tbl_product): Promise<tbl_product> => {
  try {
    return await prisma.tbl_product.update({
      where: {
        p_id: productId
      },
      data: body
    });
  } catch (error) {
    throw error;
  }
}

export const removeProduct = async (productId: number): Promise<tbl_product> => {
  try {
    return await prisma.tbl_product.delete({
      where: {
        p_id: productId
      }
    });
  } catch (error) {
    throw error;
  }
}

