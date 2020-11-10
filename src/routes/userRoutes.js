import { Router } from 'express';
import UserController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/list', loginRequired, UserController.index);
router.post('/create', UserController.create);

router.get('/:id', UserController.show);
router.put('/update', loginRequired, UserController.update);
router.delete('/delete', loginRequired, UserController.delete);

export default router;
