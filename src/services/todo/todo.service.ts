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

  async updateTodo(data: UpdateTodo): Promise<Todo> {
    if (!data.id) {
      throw new AppError('Não foi possível atualizar a tarefa', 400);
    }
    const todoUpdated = await todoRepository.update(data);
    return todoUpdated;
  }

  async deleteTodo(todo_id: string): Promise<void> {
    if (!todo_id) {
      throw new AppError('Não foi possível deletar a tarefa', 400);
    }
    await todoRepository.delete(todo_id);
  }
}
