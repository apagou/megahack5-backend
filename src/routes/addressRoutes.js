import { Router } from 'express';
import UserController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.post('/create', loginRequired, UserController.createAddress);
router.get('/', loginRequired, UserController.getAddress);

export default router;
