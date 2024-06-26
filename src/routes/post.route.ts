import { Router } from "express";
import { createPost, deletePost, getPost, getPostById, updatePost } from "../controllers";

const postRouter: Router = Router();

postRouter.get('/', getPost);
postRouter.get('/:id', getPostById);
postRouter.post('/', createPost)
postRouter.put('/:id', updatePost);
postRouter.delete('/:id', deletePost);

export default postRouter;