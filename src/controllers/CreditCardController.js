
import CreditCard from '../models/CreditCard';
import User from '../models/Users';

class CreditCardController {
    async addCreditCard(req, res) {
        const { card_number, last_digits, CVV, validity_date, CPF } = req.body;
        const { userId } = req;

        let user = await User.findOne({ where: { id: userId }, attributes: ['name'] })

        const owner_name = user.dataValues.name

        try {
            const userCardNumber = await CreditCard.create({
                card_number, last_digits, CVV, validity_date, CPF, owner_name, user_id: userId
            });


            return res.json({ status: 'Created Successfully' });
        } catch (error) {
            console.log('aaaaaaaaaaaaaaaaa', error);
            return res.status(400).json({ errors: error.errors.map((err) => err.message) });
        }
    }

    async getCreditCard(req, res) {
        const { userId } = req;

        try {
            const credit_info = await CreditCard.findAll({ where: { user_id: userId } });

            res.json(credit_info);
        } catch (e) {
            console.log(e);
        }
    }


}

export default new CreditCardController();












