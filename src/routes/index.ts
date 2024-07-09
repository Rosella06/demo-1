import type { Request, Response } from 'express';
import { Router } from 'express';
import { BaseResponse } from '../models';
import userRouter from './user.route';
import profileRouter from './profile.route';
import postRouter from './post.route';
import authRouter from './auth.route';
import productRouter from './product.route';
const router = Router();

router.use('/user', userRouter);
router.use('/product', productRouter);
router.use('/product', postRouter);
router.use('/profile', profileRouter);
router.use('/post', postRouter);
router.use('/auth', authRouter);
router.use('/', (req: Request, res: Response<BaseResponse>) => {
  res.status(404).json({ 
    message: 'Not Found',
    success: false, 
    data: null
  });
});

export default router;