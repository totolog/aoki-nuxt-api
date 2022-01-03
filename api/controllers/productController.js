const Product = require('../models/product.js')

module.exports = {
  find_products: async (req, res) => {
    const products = await Product.find().catch((err) => {
      res.send(err)
      console.error(err)
    })
    return res.json(products)
  },

  create_product: async (req, res) => {
    const product = new Product()
    product.name = req.body.name
    await product.save().catch((err) => {
      res.send(err)
      console.error(err)
    })
    return res.json(product)
  },

  find_product: async (req, res) => {
    const product = await Product.findById(req.params.id).catch((err) => {
      res.send(err)
      console.error(err)
    })
    return res.json(product)
  }
}
