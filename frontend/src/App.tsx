import { Button } from './components/Button';
import { TableTasks } from './components/TableTasks';

function App() {
  return (
      <div className="w-screen h-screen bg-gray-400 flex justify-center p-6">
        <div>
          <h1 className="text-3xl text-gray font-bold text-center">Gerenciador de tarefas</h1>
          <div className="flex items-center gap-40 p-10">
            <Button title='Adicionar Tarefa'/>
            <Button title='Listar todas as tarefas'/>
            <Button title='Ocultar tarefas concluídas'/>
          </div>
            <TableTasks/>
        </div>
      </div>
  )
}

export default App
