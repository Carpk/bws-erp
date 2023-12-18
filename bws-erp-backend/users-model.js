import mongoose from 'mongoose'

const usersSchema = mongoose.Schema({
  name: String,
  quantity: String,
  project: String,
  link: String,
  date: Date,
  status: String,
  ordered: String,
  recieved: String
})

export default mongoose.model('users', usersSchema)
