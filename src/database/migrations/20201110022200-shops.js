module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('shops', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      shop: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      where_is_located: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      open: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      close: {
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
    await queryInterface.dropTable('shops');
  },
};
