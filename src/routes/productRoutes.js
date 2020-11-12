import { Router } from 'express';

import ProductController from '../controllers/ProductController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.post('/', ProductController.store);
router.get('/',loginRequired, ProductController.index);
router.get('/:id',loginRequired, ProductController.show);

export default router;
