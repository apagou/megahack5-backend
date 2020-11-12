import Sequelize, { Model } from 'sequelize';

export default class Shop extends Model {
  static init(sequelize) {
    super.init(
      {
        name: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [4, 30],
              msg: 'Field "shop" must have a value between 4 and 30 chars',
            },
          },
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
        lat: {
          type: Sequelize.DECIMAL(18,8),
        },
        long: {
          type: Sequelize.DECIMAL(18,8),
        },
        img_url: {
          type: Sequelize.STRING,
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
    this.hasMany(models.Product, {foreignKey: 'shop_id'})
    this.hasMany(models.Order, {foreignKey: 'shop_id'})
}




}
