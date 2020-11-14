import Sequelize, { Model } from 'sequelize';
import appConfig from '../config/appConfig'
import bcryptjs from 'bcryptjs';

export default class CreditCard extends Model {
    static init(sequelize) {
        super.init(
            {
                card_number: {
                    type: Sequelize.VIRTUAL,
                    defaultValue: '',
                },
                CVV_hash:{
                    type: Sequelize.INTEGER,
                    defaultValue: ''
                },
                card_number_hash: {
                    type: Sequelize.STRING,
                    defaultValue: '',
                },
                last_digits: {
                    type: Sequelize.STRING,
                    defaultValue: '',
                },
                CVV: {
                    type: Sequelize.VIRTUAL,
                    defaultValue: '',
                },
                validity_date: {
                    type: Sequelize.STRING,
                    defaultValue: '',
                },
                user_id: {
                    type: Sequelize.INTEGER,
                    defaultValue: '',
                },
                owner_name: {
                    type: Sequelize.STRING,
                    defaultValue: '',
                },
                CPF: {
                    type: Sequelize.STRING,
                    defaultValue: '',
                },
            },
            {
                sequelize,
            },
        );


        this.addHook('beforeSave', async (creditCard) => {
            if (creditCard.card_number) { creditCard.card_number_hash = await bcryptjs.hash(creditCard.card_number, 8); }
            if (creditCard.CVV) { creditCard.CVV_hash = await bcryptjs.hash((creditCard.CVV).toString(), 8); }
        });
        return this;
    }

    CreditCardIsValid(creditCard) {
        return bcryptjs.compare(creditCard, this.card_number_hash);
    }

    static associate(models) {
        this.belongsTo(models.User, { foreignKey: 'user_id' });
    }

}
