import { Task } from '../hooks/useTasks';

interface TableProps {
  data: Task[];
}

export const TableTasks = ({ data }: TableProps) => {
  return (
    <table className="min-w-full border-collapse border border-gray-300">
  <thead>
    <tr className="bg-gray-100">
      <th className="border border-gray-300 px-4 py-2 text-left">ID</th>
      <th className="border border-gray-300 px-4 py-2 text-left">Descrição</th>
      <th className="border border-gray-300 px-4 py-2 text-left">Concluída</th>
    </tr>
  </thead>
  <tbody>
    {data.map((task) => (
        <tr key={task.id}>
          <td className="border text- px-4 py-2">{task.id}</td>
          <td className="border px-4 py-2">{task.description}</td>
          <td className="border px-4 py-2"><input
            type="checkbox"
            checked={task.isCompleted}
            // onChange={() => handleToggle(task.id)}
          /></td>
        </tr>
      ))}
  </tbody>
</table>
  )
}