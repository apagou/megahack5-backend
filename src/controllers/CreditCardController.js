
import CreditCard from '../models/CreditCard';
import User from '../models/Users';

class CreditCardController {
    async addCreditCard(req, res) {
        const { card_number, last_digits, CVV, validity_date, CPF, owner_name } = req.body;
        const { userId } = req;

        try {
            const userCardNumber = await CreditCard.create({
                card_number, last_digits, CVV, validity_date, CPF, user_id: userId, owner_name
            });


            return res.json({ status: 'Created Successfully' });
        } catch (error) {
            console.log(error)
            return res.status(400).json({ errors: error.errors.map((err) => err.message) });
        }
    }

    async getCreditCard(req, res) {
        const { userId } = req;

        try {
            const credit_info = await CreditCard.findAll({ where: { user_id: userId }, attributes:['id','last_digits','validity_date','owner_name','CPF'] });

            res.json(credit_info);
        } catch (e) {
            console.log(e);
        }
    }


}

export default new CreditCardController();












