const Product = require('../../models/Product')


const ProductController = {
    async createProduct(req, res) {
        const bodyData = req.body
        const { user_id } = req.params
        try {
            const data = { username: user_id, ...bodyData }

            const newProduct = await Product.create(data)
            await newProduct.populate('username')
            return res.status(200).json(newProduct)

        } catch (err) {
            return res.status(400).json(err)
        }
    },
    async getUsersProduct(req, res) {
        const { user_id } = req.params
        try {
            const productsOfAnUsers = await Product.find({ username: user_id })
            return res.status(200).json(productsOfAnUsers)
        } catch (err) {
            return res.status(400).json(err)
        }
    },
    async updateProduct(req, res) {
        const bodyData = req.body
        const { product_id, user_id } = req.params
        try {
            const updatedProduct = await Product.findByIdAndUpdate(product_id, bodyData, { new: true })
            return res.status(200).json(updatedProduct)
        } catch (err) {
            return res.status(400).json(err)
        }
    },
    async deleteProduct(req, res) {
        const { user_id, product_id } = req.params
        try {
            const deleteProduct = await Product.findByIdAndDelete(product_id)
            return res.status(200).json(deleteProduct)
        } catch (err) {
            return res.status(400).json(err)
        }
    },
    async getProducts(req, res) {
        try {
            const products = await Product.find()
            res.status(200).json(products)
        } catch (err) {
            return res.status(400).json(err)
        }
    },
    async getProductById(req, res) {
        const { product_id } = req.params
        try {
            const product = await Product.findById(product_id)
            res.status(200).json(product)
        } catch (err) {
            return res.status(400).json(err)
        }
    }
}

module.exports = ProductController