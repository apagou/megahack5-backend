import Sequelize, { Model } from 'sequelize';

export default class UserAddress extends Model {
    static init(sequelize) {
        super.init(
            {
                address: {
                    type: Sequelize.STRING,
                    defaultValue: '',
                },
                number: {
                    type: Sequelize.STRING,
                    defaultValue: '',
                },
                user_id: {
                    type: Sequelize.INTEGER,
                    defaultValue: 0,
                },
            },
            {
                sequelize,
            },
        );
        return this;
    }
}
