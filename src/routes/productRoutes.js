import { Router } from 'express';

import ProductController from '../controllers/ProductController';
import loginRequired from '../middlewares/loginRequired';
import Product from '../models/Product';

const router = new Router();

router.post('/', ProductController.store);
router.get('/', ProductController.index);
router.get('/:id', ProductController.show);

export default router;
