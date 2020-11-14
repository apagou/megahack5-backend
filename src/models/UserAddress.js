import Sequelize, { Model } from 'sequelize';

export default class UserAddress extends Model {
  static init(sequelize) {
    super.init(
      {
        address: {
          type: Sequelize.STRING,
          defaultValue: '',
        },
        latitude: {
          type: Sequelize.DECIMAL(18, 8),
          defaultValue: '',
        },
        longitude: {
          type: Sequelize.DECIMAL(18, 8),
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

  static associate(models) {
    this.belongsTo(models.Order, { foreignKey: 'address' });
  }
}
