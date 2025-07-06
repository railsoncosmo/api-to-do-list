import { Router } from 'express';
import { todoRouter } from './todo.routes';

export const router = Router();
router.use(todoRouter);
