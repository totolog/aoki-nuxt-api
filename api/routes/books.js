const { Router } = require('express')
const bookController = require('../controllers/bookController')

const router = Router()

/* GET books listing. */
router.get('/', async (req, res) => {
  return await bookController.find_books(req, res)
})

/* GET book by ID. */
router.get('/:id', async (req, res) => {
  return await bookController.find_book(req, res)
})

// 本作成
router.post('/', async (req, res) => {
  return await bookController.create_book(req, res)
})
// 本の更新
router.put('/:id', async (req, res) => {
  return await bookController.update_book(req, res)
})

router.delete('/:id', async (req, res) => {
  return await bookController.delete_book(req, res)
})

module.exports = router
