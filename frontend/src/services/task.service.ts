import { api } from '../services/api';
import { Task } from '../types/task';

export const TaskService = {

  create: async (task: string, image?: File): Promise<Task> => {
    const formData = new FormData();
    formData.append("description", task);
      if (image) {
    formData.append("url_image", image);
    }
    const response = await api.post('/todos', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  },

  getAll: async(): Promise<Task[]> => {
    const response = await api.get('/todos');
    return response.data;
  },

  update: async(id: string, status?: boolean): Promise<Task> => {
    const response = await api.put(`/todos/${id}`, {
      isCompleted: !status,
    });
    return response.data;
  },

  delete: async(id: string): Promise<void> => {
    await api.delete(`/todos/${id}`);
  },
}