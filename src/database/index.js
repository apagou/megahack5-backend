import Sequelize from 'sequelize';
import databaseConfig from '../config/database';

import User from '../models/Users';
import Shop from '../models/Shop';
import Product from '../models/Product';

const models = [User, Shop, Product];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
