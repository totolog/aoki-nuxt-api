const Product = require('../models/product.js')

module.exports = {
  find_products: async (req, res) => {
    const products = await Product.find({ isStatus: true }).catch((err) => {
      res.send(err)
      console.error(err)
    })
    return res.json(products)
  },

  find_product: async (req, res) => {
    const product = await Product.findById(req.params.id).catch((err) => {
      res.send(err)
      console.error(err)
    })
    return res.json(product)
  },

  create_product: async (req, res) => {
    const product = new Product()
    product.name = req.body.name
    product.price = req.body.price
    product.isStatus = req.body.isStatus
    await product.save().catch((err) => {
      res.send(err)
      console.error(err)
    })
    return res.json(product)
  },

  update_product: async (req, res) => {
    const product = await Product.findById(req.params.id).catch((err) => {
      res.send(err)
      console.error(err)
    })
    product.name = req.body.name
    product.price = req.body.price
    product.isStatus = req.body.isStatus
    await product.save()
    return res.json(product)
  },

  // 特定の商品を削除する。
  delete_product: async (req, res) => {
    await Product.deleteOne({
      _id: req.params.id
    }).catch((err) => {
      res.send(err)
      console.error(err)
    })
    return res.json({ message: 'Successfully deleted' })
  }
}
