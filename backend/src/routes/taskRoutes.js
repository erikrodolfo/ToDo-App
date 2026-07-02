import { Router } from "express";
import { TaskController } from "../controllers/taskController.js";

const taskRoutes = Router()

taskRoutes.post('/', TaskController.create)
taskRoutes.put('/:id', TaskController.edit)
taskRoutes.delete('/:id', TaskController.delete)
taskRoutes.get('/', TaskController.getAll)

export default taskRoutes