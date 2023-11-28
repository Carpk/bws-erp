import mongoose from 'mongoose'

const tasksSchema = mongoose.Schema({
  name: String,
  start: Date,
  end: Date
})

export default mongoose.model('tasks', tasksSchema)
