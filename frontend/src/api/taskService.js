import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/tasks",
});

export const TaskService = {
  async getAll() {
    const response = await api.get("/");
    return response.data;
  },

  async create(task) {
    const response = await api.post("/", task);
    return response.data;
  },

  async update(id, task) {
    const response = await api.put(`/${id}`, task);
    return response.data;
  },

  async delete(id) {
    await api.delete(`/${id}`);
  }
};