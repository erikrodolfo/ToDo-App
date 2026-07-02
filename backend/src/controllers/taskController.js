import { TaskService } from "../services/taskService.js";

export const TaskController = {
  async create(req, res) {
    try {
      const result = await TaskService.createTask(req.body);
      res.status(201).json(result);
    } catch(err) {
      return res.status(400).json({ error: err.message });
    }
  },
  async edit(req, res) {
    try {
      const { id } = req.params
      const result = await TaskService.editTask(id, req.body);
      res.status(200).json(result);
    } catch(err) {
      return res.status(400).json({ error: err.message });
    }
  },
  async delete(req, res) {
    try {
      const result = await TaskService.deleteTask(req.params.id);
      res.status(204).send();
    } catch(err) {
      return res.status(400).json({ error: err.message });
    }
  },
  async getAll(req, res) {
    try {
      const result = await TaskService.getAllTasks()
      res.status(200).json(result);
    } catch(err) {
      return res.status(400).json({ error: err.message });
    } 
  }
}