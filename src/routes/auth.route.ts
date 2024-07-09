import { Router } from "express";
import { login, adduser } from "../controllers";

const authRouter: Router = Router();

authRouter.post('/',login);
authRouter.post('/signup', adduser);

export default authRouter;