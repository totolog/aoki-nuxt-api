const { Router } = require('express')
const userController = require('../controllers/userController')

const router = Router()

/* GET users listing. */
router.get('/', async (req, res) => {
  return await userController.find_users(req, res)
})

/* GET user by ID. */
router.get('/:id', async (req, res) => {
  return await userController.find_user(req, res)
})

// ユーザー作成
router.post('/', async (req, res) => {
  return await userController.create_user(req, res)
})
// ユーザー更新
router.put('/:id', async (req, res) => {
  return await userController.update_user(req, res)
})

router.delete('/:id', async (req, res) => {
  return await userController.delete_user(req, res)
})

module.exports = router
