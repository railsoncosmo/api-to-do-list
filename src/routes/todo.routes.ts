import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '../config/upload-file';
import { TodoController } from '../controllers/todo/todo.controller';

const todoController = new TodoController();

export const todoRouter = Router();
const upload = multer(uploadConfig.upload('./tmp'));

todoRouter.post('/todos', upload.single('url_image'), todoController.createNewTodo);
todoRouter.get('/todos', todoController.getAllTodos);
todoRouter.put('/todos/:id', todoController.updateTodo);
todoRouter.delete('/todos/:id', todoController.deleteTodo);
