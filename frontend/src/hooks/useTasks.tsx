import { useState, useEffect } from 'react';
import { Task } from '../types/task';
import { TaskService } from '../services/task.service';

const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await TaskService.getAll();
        setTasks(data)

        console.log(tasks);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, [tasks])

  const createNewTask = async (task: string, imageTask?: File) => {
    if(!task){
      return;
    }
    try {
      const newTask = await TaskService.create(task, imageTask)
      setTasks(prev => [...prev, newTask])
    } catch (error) {
      console.log(error);
    }
  }

  const deleteTask = async(id: string) => {
    await TaskService.delete(id);
    setTasks(prev => prev.filter(task => task.id !== id));
  }

  const sortTasks = () => {
    const sorted = [...tasks].sort((a, b) => Number(a.isCompleted) - Number(b.isCompleted));
    setTasks(sorted);
  };

  const toggleTaskStatus = async (id: string, status: boolean) => {
  try {
    const updatedTask = await TaskService.update(id, status);
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, isCompleted: updatedTask.isCompleted } : task
      )
    );
  } catch (erro) {
    console.error(erro);
  }
};

  return {
    tasks,
    createNewTask,
    deleteTask,
    sortTasks,
    toggleTaskStatus
  }
}

export { useTasks };