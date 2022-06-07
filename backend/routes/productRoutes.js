import express from "express"

const router=express.Router()
import {getProductById,getProducts} from '../controllers/productController.js'

//@desc  fetch all products
//@route  GET /api/products
//@access  Public 
router.route('/').get(getProducts)
router.route('/:id').get(getProductById)

//@desc  fetch single product
//@route  GET /api/products/:id
//@access  Public


export default router