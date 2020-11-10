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
      url: {
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
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      shop_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'shops',
          key: 'id',
        },
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('products');
  },
};
