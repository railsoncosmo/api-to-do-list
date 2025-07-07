import { useTasks } from '../hooks/useTasks';
import { MdDelete } from "react-icons/md";

export const TableTasks = () => {
  const { tasks, deleteTask, toggleTaskStatus } = useTasks();

  return (
    <table className="min-w-full border-collapse border border-gray-300">
  <thead>
    <tr className="bg-gray-100">
      <th className="border border-gray-300 px-4 py-2 text-center">Imagem</th>
      <th className="border border-gray-300 px-4 py-2 text-center">Descrição</th>
      <th className="border border-gray-300 px-4 py-2 text-center">Concluída</th>
      <th className="border border-gray-300 px-4 py-2 text-center">Ações</th>
    </tr>
  </thead>
  <tbody>
    {(tasks ?? []).map((task) => (
        <tr key={task.id}>
          <td className="border text-center px-4 py-2">
            {task.url_image ? (
            <img
              src={`http://localhost:3333/files/${task.url_image}`}
              alt="tarefa"
              className="w-20 h-20 object-cover rounded flex items-center"
            />
              ) : (
            <span>Sem imagem</span>
              )}
          </td>
          <td className="border px-4 py-2">{task.description}</td>
          <td className="border px-4 py-2 text-center">
            <input
            className='w-5 h-5 accent-blue-500'
            type="checkbox"
            checked={task.isCompleted}
            onChange={() => toggleTaskStatus(task.id, task.isCompleted)}
            />
            </td>
          <td className="border px-4 py-2 text-center">
            <div className='flex gap-5 justify-center'>
              <button
                onClick={() => deleteTask(task.id)}
              >
                <MdDelete size={25} color='#8c161d'/>
              </button>
            </div>
          </td>
        </tr>
      ))}
  </tbody>
</table>
  )
}