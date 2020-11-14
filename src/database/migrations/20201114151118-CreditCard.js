module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('creditCards', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      card_number_hash: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      last_digits: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      CVV: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      validity_date: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      user_id: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id',
        },
      },
      owner_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      CPF: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('creditCards');
  },
};
