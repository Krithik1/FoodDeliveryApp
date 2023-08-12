import express from 'express';
import { loginUser, registerUser, deleteUser } from '../controllers/authController';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.delete('/delete/:id', deleteUser);

export default router;