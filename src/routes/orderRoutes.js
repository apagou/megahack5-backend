import { Router } from 'express';

import OrderController from '../controllers/OrderController';
import loginRequired from '../middlewares/loginRequired';


const router = new Router();

router.post('/',loginRequired, OrderController.store);
router.get('/',loginRequired, OrderController.index);

export default router;
