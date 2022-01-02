const express = require('express')
const mongoose = require('mongoose')
const app = express()
const router = require('./routes')

// Require API routes
// const users = require('./routes/users')
// const test = require('./routes/test')

// Import API Routes
// app.use(users)
// app.use(test)
mongoose.connect('mongodb://localhost:27017/user')
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/', router)

// Export express app
module.exports = app

// Start standalone server if directly running
if (require.main === module) {
  const port = process.env.PORT || 3001
  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`API server listening on port ${port}`)
  })
}
