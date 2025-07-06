import { Router } from 'express';
import { TodoController } from '../controllers/todo/todo.controller';

const todoController = new TodoController();

export const todoRouter = Router();

todoRouter.post('/todos', todoController.createNewTodo);
todoRouter.get('/todos', todoController.getAllTodos);
todoRouter.put('/todos/:id', todoController.updateTodo);
todoRouter.delete('/todos/:id', todoController.deleteTodo);
