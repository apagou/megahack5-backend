import { Router } from 'express';
import ShopController from '../controllers/ShopController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/', loginRequired, ShopController.index);
router.post('/', ShopController.create);

//router.get('/:id',loginRequired, ShopController.show);

export default router;
