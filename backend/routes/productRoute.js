import express from 'express'

import {listProducts, removeProduct, addProduct,singleProduct} from '../controllers/productController.js'

const productRouter =express.Router();

productRouter.post('/add',upload.fields([{name:'image1',maxCount:1},{name:'image2',maxCount:1},{name:'image2',maxCount:1}]), addProduct);
productRouter.post('/remove', removeProduct);
productRouter.get('/lists', listProducts);
productRouter.post('/single', singleProduct);


export default productRouter

