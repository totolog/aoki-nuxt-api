const express = require('express')
const router = express.Router()

const users = require('./users')
const books = require('./books')
const products2 = require('./products.js')

router.use('/users', users)
router.use('/books', books)
router.use('/products2', products2)

module.exports = router
