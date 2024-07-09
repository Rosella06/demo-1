import { Router } from "express";
import { getProductById, getProducts, handleAddProduct, handleDeleteProduct, updateProduct } from "../controllers/product.controller";
// import { getProduct } from "../controllers";

const productRouter: Router = Router();




productRouter.get('/', getProducts);
productRouter.get('/:id', getProductById);
productRouter.delete('/:id', handleDeleteProduct);
productRouter.post('/add-product', handleAddProduct);
productRouter.put('/edit-product/:id', updateProduct);


export default productRouter;