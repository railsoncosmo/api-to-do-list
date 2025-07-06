import { useState, useEffect } from 'react';
import { Task } from '../types/task';
import { TaskService } from '../services/task.service';

const useTaks = () => {
  const [tasks, setTasks] = useState<Task[]>([])

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
  }, [])

  return {
    tasks
  }
}

export default useTaks;