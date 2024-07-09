import { NextFunction, Request, Response } from "express";
import { BaseResponse } from "../models";
import { addProduct, changeProduct, findProduct, productList, removeProduct } from "../services/product.servics";
import { tbl_product } from "@prisma/client";

export const getProducts = async (req: Request, res: Response<BaseResponse<tbl_product[]>>, next: NextFunction) => {
  try {
    const products = await productList();
    res.status(200).json({
      message: 'Successful',
      success: true,
      data: products
    });
  } catch (error) {
    next(error);
  }
}

export const getProductById = async (req: Request, res: Response<BaseResponse<tbl_product | null>>, next: NextFunction) => {
  try {
    const productId = Number(req.params.id);
    const product = await findProduct(productId);
    if (!product) {
      res.status(404).json({
        message: `Product with ID ${productId} not found`,
        success: false,
        data: null
      });
      return;
    }
    res.status(200).json({
      message: 'Successful',
      success: true,
      data: product
    });
  } catch (error) {
    next(error);
  }
}

export const handleAddProduct = async (req: Request, res: Response<BaseResponse<tbl_product>>, next: NextFunction) => {
  try {
    const newProduct = await addProduct(req.body as tbl_product);
    res.status(201).json({
      message: 'Product added successfully',
      success: true,
      data: newProduct
    });
  } catch (error) {
    next(error);
  }
}

export const updateProduct = async (req: Request, res: Response<BaseResponse<tbl_product>>, next: NextFunction) => {
  try {
    const productId = Number(req.params.id);
    const updatedProduct = await changeProduct(productId, req.body as tbl_product);
    res.status(200).json({
      message: 'Product updated successfully',
      success: true,
      data: updatedProduct
    });
  } catch (error) {
    next(error);
  }
}

export const handleDeleteProduct = async (req: Request, res: Response<BaseResponse<null>>, next: NextFunction) => {
  try {
    const productId = Number(req.params.id);
    await removeProduct(productId);
    res.status(200).json({
      message: 'Product deleted successfully',
      success: true,
      data: null
    });
  } catch (error) {
    next(error);
  }
}
