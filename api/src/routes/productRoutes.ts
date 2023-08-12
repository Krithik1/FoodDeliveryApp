import express from 'express';
import { createProduct, getProduct, updateProduct } from '../controllers/productController';

const router = express.Router();

router.post('/create', createProduct);
router.get('/get/:id', getProduct);
router.put('/update/:id', updateProduct);

export default router;