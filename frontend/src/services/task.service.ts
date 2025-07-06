import { api } from '../services/api';
import { Task } from '../types/task';

export const TaskService = {

  create: async (data: Omit<Task, 'id'>): Promise<Task> => {
    const response = await api.post('/todos', data);
    return response.data;
  },

  getAll: async(): Promise<Task[]> => {
    const response = await api.get('/todos');
    return response.data;
  },

  update: async(id: string, data: Partial<Task>): Promise<Task> => {
    const response = await api.put(`/todos/${id}`, data);
    return response.data;
  },

  delete: async(id: string): Promise<void> => {
    await api.delete(`/todos/${id}`);
  },
}