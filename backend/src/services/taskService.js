import { TaskRepository } from "../repositories/taskRepository.js";

export const TaskService = {
  async createTask(data) {
    if(!data.title) 
      throw new Error("O título é obrigatório!");

    const newTask = {
      title: data.title,
      description: data.description,
      status: data.status || 'pendente'
    }
    
    return await TaskRepository.create(newTask);
  },
  async editTask(id, data) {
    if(!data.title) 
      throw new Error("O título é obrigatório!");

    const updatedTask = {
      title: data.title,
      description: data.description,
      status: data.status || 'pendente'
    }
    return await TaskRepository.edit(updatedTask, id);
  },
  async deleteTask(id) {
    const taskExists = await TaskRepository.getById(id);

    if(!taskExists)
      throw new Error("Tarefa não encontrada!")

    return await TaskRepository.delete(id);
  },
  async getAllTasks() {
    return await TaskRepository.getAll();
  }
}