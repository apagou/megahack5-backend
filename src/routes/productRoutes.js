import { Router } from 'express';
import multer from 'multer';

import multerConfig from '../config/multer'
import ProductController from '../controllers/ProductController';
import loginRequired from '../middlewares/loginRequired';

const upload = multer(multerConfig)

const router = new Router();

router.post('/', ProductController.store);

export default router;
