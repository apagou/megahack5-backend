import Sequelize, { Model } from 'sequelize';


export default class Order extends Model {
    static init(sequelize) {
        super.init(
            {
                requested_shop: {
                    type: Sequelize.STRING,
                    defaultValue: '',
                },
                order_status:{
                    type: Sequelize.STRING,
                    defaultValue: '',
                },
                amount:{
                    type: Sequelize.INTEGER,
                    defaultValue: 0,
                },
                buyer: {
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

    static associate(models){
        this.hasMany(models.OrderedProducts, {foreignKey: 'order_id'})
    }



}
