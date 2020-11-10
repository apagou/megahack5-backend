import { Router } from 'express';
import ProductController from '../controllers/ProductController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.post('/', ProductController.create);

export default router;
