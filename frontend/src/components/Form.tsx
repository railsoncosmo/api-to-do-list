import { useState } from "react";
import { Button } from "./Button";
import { useTasks } from "../hooks/useTasks";

export const Form = () => {
  const { createNewTask } = useTasks();
  const [taskDescription, setTaskDescription] = useState("");
  const [imageTask, setImageTask] = useState<File | null>(null);

  const handleAddTask = () => {
    if (taskDescription.trim()) {
      createNewTask(taskDescription, imageTask ?? undefined);
      setTaskDescription("");
      setImageTask(null);
    }
  };

  return (
    <div className="mt-4 mb-4 flex justify-center items-center gap-5">
      <input 
        className="w-80 rounded-lg px-2"
        type="file" 
        placeholder="Digite a nova tarefa"
        onChange={(e) => {
        if (e.target.files && e.target.files[0]) {
          setImageTask(e.target.files[0]);
            }
          }}
      />
      <input 
        className="w-80 rounded-lg px-2"
        type="text" 
        value={taskDescription}
        placeholder="Digite a nova tarefa"
        onChange={(e) => setTaskDescription(e.target.value)}
      />
      <Button title='Adicionar Tarefa'
        onPress={handleAddTask}
      />
    </div>
  )
}