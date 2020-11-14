import { Router } from 'express';
import CreditCardController from '../controllers/CreditCardController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// In the future this route will be removed, credit card info SHOULD NOT be stored in
// the same database of the user.

router.post('/create', loginRequired, CreditCardController.addCreditCard);
router.get('/', loginRequired, CreditCardController.getCreditCard);

export default router;
