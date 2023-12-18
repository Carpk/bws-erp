import mongoose from 'mongoose'

const tasksSchema = mongoose.Schema({
  name: String,
  quantity: Number,
  dates: {start: Date, end: Date}
})

export default mongoose.model('tasks', tasksSchema)
