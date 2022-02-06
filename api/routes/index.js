const express = require('express')
const router = express.Router()

const users = require('./users')
const books = require('./books')
const products = require('./products')

router.use('/users', users)
router.use('/books', books)
router.use('/products', products)

module.exports = router
