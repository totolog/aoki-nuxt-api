const { Router } = require('express')
const userController = require('../controllers/userController')

const router = Router()

/* GET users listing. */
router.get('/', async (req, res) => {
  console.log('getリクエスト')
  return await userController.find_users(req, res)
})

/* GET user by ID. */
// router.get('/:id', function (req, res, next) {
//   const id = parseInt(req.params.id)
//   if (id >= 0 && id < users.length) {
//     res.json(users[id])
//   } else {
//     res.sendStatus(404)
//   }
// })

// ユーザー作成
router.post('/', async (req, res) => {
  return await userController.create_user(req, res)
})

module.exports = router
