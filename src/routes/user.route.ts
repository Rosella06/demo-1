import { Router } from "express";
import { createUser, deleteUser, getUser, getUserById, updateUser } from "../controllers";

const userRouter: Router = Router();

//user 
userRouter.get('/', getUser);
userRouter.get('/:id', getUserById);
userRouter.post('/', createUser);
userRouter.put('/:id', updateUser);
userRouter.delete('/:id', deleteUser);

export default userRouter;