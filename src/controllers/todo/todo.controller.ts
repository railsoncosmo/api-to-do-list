import { Request, Response } from 'express';
import { TodoService } from '../../services/todo/todo.service';
import { CreateTodo, UpdateTodo } from '../../types/todo/todo.types';

const todoService = new TodoService();

export class TodoController {
  async createNewTodo(req: Request, res: Response) {
    const { description, isCompleted } = req.body as CreateTodo;
    const file = req.file;
    const url_image = file ? file.filename : null;

    const newTodo = await todoService.createTodo({
      description,
      isCompleted,
      url_image
    });

    return res.status(201).json(newTodo);
  }

  async getAllTodos(_req: Request, res: Response) {
    const allTodos = await todoService.findAllTodos();

    return res.status(200).json(allTodos);
  }

  async updateTodo(req: Request, res: Response) {
    const { description, isCompleted, url_image } = req.body as UpdateTodo;
    const { id } = req.params;

    const todoUpdated = await todoService.updateTodo({
      id,
      description,
      isCompleted,
      url_image,
    });

    return res.status(200).json(todoUpdated);
  }

  async deleteTodo(req: Request, res: Response) {
    const { id } = req.params;

    await todoService.deleteTodo(id);

    return res.status(204).send();
  }
}
