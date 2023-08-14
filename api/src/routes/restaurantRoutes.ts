import express from 'express';
import { createRestaurant, getRestaurant, getAllRestaurants, updateRestaurant } from '../controllers/restaurantController';

const router = express.Router();

router.post('/create', createRestaurant);
router.get('/get/:id', getRestaurant);
router.get('/get', getAllRestaurants);
router.put('/update/:id', updateRestaurant);

export default router;