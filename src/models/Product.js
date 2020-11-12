import Sequelize, { Model } from 'sequelize';
import appConfig from '../config/appConfig'

export default class Product extends Model {
    static init(sequelize) {
        super.init(
            {
                name: {
                    type: Sequelize.STRING,
                    defaultValue: '',
                },
                img_url:{
                    type: Sequelize.STRING,
                    defaultValue: '',
                },
                price: {
                    type: Sequelize.DECIMAL(18,2),
                    defaultValue: '',
                },
                stars: {
                    type: Sequelize.INTEGER,
                    defaultValue: '',
                },
                size: {
                    type: Sequelize.INTEGER,
                    defaultValue: '',
                },
                shop_id: {
                    type: Sequelize.INTEGER,
                    defaultValue: '',
                },
            },
            {
                sequelize,
            },
        );
        return this;
    }

}
