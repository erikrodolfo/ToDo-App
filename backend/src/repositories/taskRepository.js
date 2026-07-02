import TaskModel from "../models/TaskModel.js";

export const TaskRepository = {
  async create(data) {
    return await TaskModel.create(data);
  },
  async edit(data, id) {
    return await TaskModel.findByIdAndUpdate(id, data, {new: true})
  },
  async delete(id) {
    return await TaskModel.findByIdAndDelete(id)
  },
  async getAll() {
    return await TaskModel.find();
  },
  async getById(id) {
    return await TaskModel.findById(id);
  }
}