const { Router } = require('express')
const productController = require('../controllers/productController')

const router = Router()

// 商品取得
router.get('/', async (req, res) => {
  return await productController.find_products(req, res)
})

// 商品詳細取得
router.get('/:id', async (req, res) => {
  return await productController.find_product(req, res)
})

// 商品作成
router.post('/', async (req, res) => {
  return await productController.create_product(req, res)
})

// 商品情報更新
router.put('/:id', async (req, res) => {
  return await productController.update_product(req, res)
})

// 商品削除
router.delete('/:id', async (req, res) => {
  return await productController.delete_product(req, res)
})

module.exports = router
