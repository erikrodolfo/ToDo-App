import { TaskForm } from "../components/TaskForm/TaskForm";
import { TaskItem } from "../components/TaskItem/TaskItem";
import { useTasks } from "../hooks/useTasks";

export function Home() {
  const {
    tasks,
    loading,
    createTask,
    updateTask,
    deleteTask,
  } = useTasks();

  return (
    <div className="container">
      <h1>To Do App</h1>

      <TaskForm
        onSubmit={createTask}
      />

      {loading && (
        <p>Carregando tarefas...</p>
      )}

      {!loading &&
        tasks.map((task) => (
          <TaskItem
            key={task._id}
            task={task}
            onDelete={deleteTask}
            onUpdate={updateTask}
          />
        ))}
    </div>
  );
}