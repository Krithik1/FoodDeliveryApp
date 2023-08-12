import { Router } from 'express';
import authRoutes from './authRoutes';
import orderRoutes from './orderRoutes';
import productRoutes from './productRoutes';
import restaurantRoutes from './restaurantRoutes';

export const router = Router();

router.use('/auth', authRoutes);
router.use('/order', orderRoutes);
router.use('/product', productRoutes);
router.use('/restaurant', restaurantRoutes);