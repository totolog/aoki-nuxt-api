const { Router } = require('express')
const productController = require('../controllers/productController')

const router = Router()

router.get('/', async (req, res) => {
  return await productController.find_products(req, res)
})

router.get('/:id', async (req, res) => {
  return await productController.find_product(req, res)
})

router.post('/', async (req, res) => {
  return await productController.create_product(req, res)
})

module.exports = router
