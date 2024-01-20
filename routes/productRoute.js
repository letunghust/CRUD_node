
/**
 * @swagger
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       required:
 *         - name
 *         - quantity
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the product
 *         name:
 *           type: string
 *           description: The name title
 *         quantity:
 *           type: number
 *           description: The quaity
 *         price:
 *           type: number
 *           description: The price
 *         image:
 *           type: string
 *           description: The image product 
 *       example:
 *         id: d5fE_asz
 *         name: The New Turing Omnibus
 *         quantity: 10
 *         price: 20$
 *         image: hello
 */


const express = require('express');
const router = express.Router();
const Product = require('../models/productModel')
const {getProducts, getProduct, createProduct, updateProduct, deleteProduct } = require('../controllers/productController');

router.get('/', getProducts);

router.get('/:id', getProduct)

router.post('/', createProduct )

// update a product
router.put('/:id', updateProduct )

// delete a product
router.delete('/:id', deleteProduct )

module.exports = router;