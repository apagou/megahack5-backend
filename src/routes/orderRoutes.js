import { Router } from 'express';

import OrderController from '../controllers/OrderController';
import loginRequired from '../middlewares/loginRequired';


const router = new Router();

router.post('/', OrderController.store);
// router.get('/:id', ProductController.findOneByShop);

export default router;
