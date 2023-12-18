import mongoose from 'mongoose'

const itemsSchema = mongoose.Schema({
  name: String,
  quantity: String,
  paints: {black: Number, primer: Number, color: Number, sealer: Number, hardcoat: Number, mathews: Number},
  sqft: {width: Number, height: Number},
  materials: [Number]
})

export default mongoose.model('items', itemsSchema)