import { Router } from 'express';
import ShopController from '../controllers/ShopController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// Shouldn't exist
router.get('/', ShopController.index);
router.post('/', ShopController.create);

// router.get("/:id", UserController.show);
// router.put("/", loginRequired, UserController.update);
// router.delete("/", loginRequired, UserController.delete);

export default router;
