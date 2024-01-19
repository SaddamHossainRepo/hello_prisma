import express from 'express';
import { userController } from './user.controller';

const router = express.Router();

router.get('/', userController.getAllUsers)
router.get('/:id', userController.getSingleUser)
router.post('/create', userController.insertIntoDB)
router.post('/profile', userController.insertOrUpdateProfile)

export const userRoutes = router;