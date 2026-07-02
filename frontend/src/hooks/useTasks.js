import { useEffect, useState } from "react";
import { TaskService } from "../api/taskService";

export function useTasks() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);

  async function loadTasks() {
    try {
      setLoading(true);

      const data = await TaskService.getAll();

      setTasks(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  async function createTask(task) {
    const created = await TaskService.create(task);

    setTasks((prev) => [...prev, created]);
  }

async function updateTask(id, task) {
  await TaskService.update(id, task);

  setTasks((prev) =>
    prev.map((item) =>
      item._id === id
        ? { ...item, ...task }
        : item
    )
  );
}
  async function deleteTask(id) {
    await TaskService.delete(id);

    setTasks((prev) =>
      prev.filter((task) => task._id !== id)
    );
  }

  useEffect(() => {
    loadTasks();
  }, []);

  return {
    tasks,
    loading,
    createTask,
    updateTask,
    deleteTask,
  };
}