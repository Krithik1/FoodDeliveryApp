import express from 'express';
import { createOrder, getOrder, orderOrder } from '../controllers/orderController';

const router = express.Router();

router.post('/create', createOrder);
router.get('/get/:id', getOrder);
router.get('order/:id', orderOrder);

export default router;