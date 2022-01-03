const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BookSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    default: 0
  },
  is_public: {
    type: Boolean,
    default: true
  }
})

module.exports = mongoose.model('Book', BookSchema)
