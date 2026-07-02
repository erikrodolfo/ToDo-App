import mongoose from "mongoose";
import { Schema } from "mongoose";

const taskSchema = new Schema({
  title: {
    type: String,
    required: true,
    maxlength: 100
  },
  description: {
    type: String,
    maxlength: 500
  },
  status: {
    type: String,
    enum: ['pendente', 'em_progresso', 'concluido'],
  }
},
{
  timestamps: true
})

export default mongoose.model('Task', taskSchema)