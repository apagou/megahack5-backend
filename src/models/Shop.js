import Sequelize, { Model } from 'sequelize';

export default class Shop extends Model {
  static init(sequelize) {
    super.init(
      {
        shop: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [4, 30],
              msg: 'Field "shop" must have a value between 4 and 30 chars',
            },
          },
        },
        where_is_located: {
          type: Sequelize.STRING,
          defaultValue: '',
        },
        open: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [4, 30],
              msg: 'Field "open" must be valid',
            },
          },
        },
        close: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [4, 30],
              msg: 'Field "close" must be valid',
            },
          },
        },
      },
      {
        sequelize,
      },
    );
    
    return this;
  }

  static associate(models){
    this.hasMany(models.Product, {foreignKey: 'shop_id'})
    this.hasMany(models.Order, {foreignKey: 'requested_shop'})
}




}
