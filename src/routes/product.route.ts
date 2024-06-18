import { Router } from "express";
import { getProduct } from "../controllers";

const productRouter: Router = Router();

//user 
productRouter.get('/', getProduct);
// productRouter.get('/:userId', verifyToken, getUserById);
// productRouter.put('/:userId', verifyToken, upload.single('fileupload'), updateUser);
// productRouter.delete('/:userId', verifyToken, deleteUser);

export default productRouter;