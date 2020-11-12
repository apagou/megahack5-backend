import Order from '../models/Order';
import OrderedProducts from '../models/OrderedProducts';
import Product from '../models/Product';
import Shop from '../models/Shop';
import UserAddress from '../models/UserAddress';

class OrderController {
  async store(req, res) {
    const { userId } = req 

    // Product list must be like -> [{"product_id": 1, "amount": 1, "price": 1}, {...}]
    const {
      shop_id, status, freight, productList,
    } = req.body;

    const lastOrder =  await Order.create({
      shop_id, status, freight, user_id: userId,
    });

    const ordered_products = [];

    // Convert the product list received to an array that can be sent to the database
    productList.map((product) => {
      ordered_products.push({
        user_id: userId, product_id: product.product_id, amount: product.amount, order_id: lastOrder.id,price: product.price
      });
    });

    await OrderedProducts.bulkCreate(ordered_products);

    return res.json({
      shop_id, status, freight, userId, productList,
    });
  }

  // Find last order by user
  async index(req, res) {
    const { userId } = req 

    try {
      const order = await Order.findAll({
        where: { user_id: userId },
        include: {
          model: Shop,
          attributes: ['name','img_url']
        }
      });

      //const address = await UserAddress.findOne({ where: { user_id: userId } });

 //     const lastOrder = order[order.length - 1];

  //    const products = [];

   //   lastOrder.OrderedProducts.map((product) => products.push(product.dataValues.product_id));

   //   const productAttributes = await Product.findAll({ where: { id: products }, attributes: ['productName', 'url'] });

     // console.log(productWithoutStrings);

      return res.json({
        order
      });
    } catch (error) {
      console.log(error);
      return res.json(null);
    }
  }
}

export default new OrderController();

