import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import taskRoutes from './routes/taskRoutes.js'

const app = express()

app.use(cors())
app.use(express.json())

app.use('/tasks', taskRoutes)

app.listen(3000, () => {
  console.log("Server rodando na porta 3000")
}) 

mongoose
.connect(process.env.MONGO_URI)
.then(() => console.log("conectado ao MongoDB"))
.catch((err) => console.error("Erro ao conectar ao MongoDB:", err))