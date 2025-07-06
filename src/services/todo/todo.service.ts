import { AppError } from '../../error/AppError';
import { TodoRepository } from '../../repositories/todo/todo.repository';
import { Todo, CreateTodo, UpdateTodo } from '../../types/todo/todo.types';

const todoRepository = new TodoRepository();

export class TodoService {
  async createTodo(data: CreateTodo): Promise<Todo> {
    if (!data.description) {
      throw new AppError('A descrição da tarefa é obrigatória', 400);
    }
    const newTodo = await todoRepository.create(data);
    return newTodo;
  }

  async findAllTodos(): Promise<Todo[]> {
    const allTodos = await todoRepository.findAll();
    return allTodos;
  }

  async updateTodo({
    id,
    description,
    isCompleted,
    url_image,
  }: UpdateTodo): Promise<Todo> {
    const todoExists = await todoRepository.findById(id);

    if (!todoExists) {
      throw new AppError('Tarefa não encontrada.', 404);
    }
    const todoUpdated = await todoRepository.update({
      id,
      description,
      isCompleted,
      url_image,
    });
    return todoUpdated;
  }

  async deleteTodo(todo_id: string): Promise<void> {
    const todoExists = await todoRepository.findById(todo_id);

    if (!todoExists) {
      throw new AppError('Tarefa não encontrada.', 404);
    }
    await todoRepository.delete(todo_id);
  }
}
