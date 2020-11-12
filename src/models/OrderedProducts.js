import Sequelize, { Model } from 'sequelize';

export default class OrderedProducts extends Model {
    static init(sequelize) {
        super.init(
            {
                user_id: {
                    type: Sequelize.INTEGER,
                    defaultValue: '',
                },
                product_id: {
                    type: Sequelize.INTEGER,
                    defaultValue: '',
                },
                order_id: {
                    type: Sequelize.INTEGER,
                    defaultValue: '',
                },
                amount: {
                    type: Sequelize.INTEGER,
                    defaultValue: 1,
                },
                price: {
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

    static associate(models) {
        this.hasOne(models.User, { foreignKey: 'id' });
        this.belongsTo(models.Product, { foreignKey: 'product_id' });
        this.hasOne(models.Order, { foreignKey: 'id' });
    }
}
