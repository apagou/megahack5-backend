module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('products', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      productName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      Price: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      Rating: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      P: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      M: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      G: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      GG: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      shopId: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        // references: { model: 'shops', key: 'id' },
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
    await queryInterface.dropTable('products');
  },
};
