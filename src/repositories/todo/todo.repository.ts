import { prisma } from '../../config/client';
import { Todo, CreateTodo } from '../../types/todo/todo.types';

export class TodoRepository {
  async create({ description, isCompleted, url_image }: CreateTodo) {
    const todo = await prisma.todo.create({
      data: {
        description,
        isCompleted,
        url_image,
      },
    });
    return todo;
  }

  async findAll() {
    const todos = await prisma.todo.findMany();
    return todos;
  }

  async update({ id, description, isCompleted, url_image }: Todo) {
    const todo = await prisma.todo.update({
      where: {
        id: id,
      },
      data: {
        description,
        isCompleted,
        url_image,
      },
    });
    return todo;
  }

  async delete(todo_id: string) {
    return await prisma.todo.delete({
      where: {
        id: todo_id,
      },
    });
  }

  async findById(todo_id: string) {
    const todo = await prisma.todo.findUnique({
      where: {
        id: todo_id,
      },
    });
    return todo;
  }
}
