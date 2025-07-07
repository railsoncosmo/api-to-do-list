import { useState, useEffect } from 'react';
import { Task } from '../types/task';
import { TaskService } from '../services/task.service';
import Swal from 'sweetalert2';

const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    fetchData();
  }, [tasks])

  const fetchData = async () => {
      try {
        const data = await TaskService.getAll();
        setTasks(data)
        console.log(data)

      } catch (error) {
        console.log(error);
      }
    }

  const createNewTask = async (task: string, imageTask?: File) => {
    
    try {
      const newTask = await TaskService.create(task, imageTask)
      setTasks(prev => [...prev, newTask]);

    } catch (error) {
      console.log(error);
    }
  }

  const deleteTask = async(id: string) => {
    Swal.fire({
      title: 'Tem certeza?',
      text: 'Você realmente que excluir a tarefa?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim, excluir!',
      cancelButtonText: 'Cancelar',
    }).then(async (result) => {
      if(result.isConfirmed){
        await TaskService.delete(id);
        setTasks(prev => prev.filter(task => task.id !== id));
        
      Swal.fire({
        toast: true,
        position: 'top-end',
        icon: 'success',
        title: 'A tarefa foi deletada',
        showConfirmButton: false,
        timer: 2500,
        timerProgressBar: true
        });
      }
    })
    
  }

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
    toggleTaskStatus,
  }
}

export { useTasks };