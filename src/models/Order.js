import Sequelize, { Model } from 'sequelize';


export default class Order extends Model {
    static init(sequelize) {
        super.init(
            {
                shop_id: {
                    type: Sequelize.STRING,
                    defaultValue: '',
                },
                status:{
                    type: Sequelize.STRING,
                    defaultValue: '',
                },
                user_id: {
                    type: Sequelize.INTEGER,
                    defaultValue: '',
                },
                freight: {
                    type: Sequelize.DECIMAL(18,2),
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
        this.belongsTo(models.Shop, {foreignKey: 'shop_id'})
    }



}
