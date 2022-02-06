const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    default: 0
  },
  isStatus: {
    type: Boolean,
    default: false
  }
})

module.exports = mongoose.model('Product', ProductSchema)
