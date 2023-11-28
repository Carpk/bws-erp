import mongoose from 'mongoose'

const ordersSchema = mongoose.Schema({
  item: String,
  name: String,
  quantity: String,
  project: String,
  link: String,
  date: Date,
  status: String,
  ordered: String,
  recieved: String
})

export default mongoose.model('orders', ordersSchema)
