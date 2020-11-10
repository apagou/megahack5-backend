import { Router } from 'express';
import ShopController from '../controllers/ShopController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/', ShopController.index);
router.post('/', ShopController.create);

router.get('/:id', ShopController.show);

export default router;
