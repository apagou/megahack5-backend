import Sequelize from 'sequelize';
import databaseConfig from '../config/database';

import User from '../models/Users';
import Shop from '../models/Shop';
import Product from '../models/Product';
import Order from '../models/Order';
import OrderedProducts from '../models/OrderedProducts';

const models = [User, Shop, Product, Order, OrderedProducts];

const connection = new Sequelize(databaseConfig);


models.forEach((model) => model.init(connection));

models.forEach((model) => model.associate && model.associate(connection.models));
