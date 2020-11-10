import Sequelize from 'sequelize';
import databaseConfig from '../config/database';

import User from '../models/Users';
import Shop from '../models/Shop';

const models = [User, Shop];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
