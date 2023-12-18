import mongoose from 'mongoose'

const projectsSchema = mongoose.Schema({
  jobName: String,
  productionStatus: String,
  bidNumber: String,
  jobNumber: String,
  purchaseOrder: String,
  date: Date
})

export default mongoose.model('projects', projectsSchema)