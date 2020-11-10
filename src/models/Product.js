import Sequelize, { Model } from 'sequelize';
import appConfig from '../config/appConfig'

export default class Product extends Model {
    static init(sequelize) {
        super.init(
            {
                productName: {
                    type: Sequelize.STRING,
                    defaultValue: '',
                },
                url:{
                    type: Sequelize.STRING,
                    defaultValue: '',
                },
                Price: {
                    type: Sequelize.STRING,
                    defaultValue: '',
                },
                Rating: {
                    type: Sequelize.INTEGER,
                    defaultValue: '',
                },
                P: {
                    type: Sequelize.BOOLEAN,
                    defaultValue: true,
                },
                M: {
                    type: Sequelize.BOOLEAN,
                    defaultValue: false,
                },
                G: {
                    type: Sequelize.BOOLEAN,
                    defaultValue: true,
                },
                GG: {
                    type: Sequelize.BOOLEAN,
                    defaultValue: false,
                },
            },
            {
                sequelize,
            },
        );
        return this;
    }


}
