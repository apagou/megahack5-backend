import Order from '../models/Order';
import OrderedProducts from '../models/OrderedProducts'
import Product from '../models/Product';
import UserAddress from '../models/UserAddress';

class OrderController {
  async store(req, res) {

    // Product list must be like -> [{"product_id": 1, "amount": 1}, {...}] 
    const { requested_shop, order_status, amount, buyer, productList } = req.body

    await Order.create({ requested_shop, order_status, amount, buyer })

    const lastOrder = await Order.findAll({
      limit: 1,
      order: [['created_at', 'DESC']]
    })

    const ordered_products = []

    // Convert the product list received to an array that can be sent to the database
    productList.map((product) => {
      ordered_products.push({ user_id: buyer, product_id: product.product_id, amount: product.amount, order_id: lastOrder[0].id })
    })

    await OrderedProducts.bulkCreate(ordered_products)

    return res.json({
      requested_shop, order_status, amount, buyer, productList
    });
  }

  // Find last order by user
  async index(req, res) {
    const { user } = req.query;

    try {
      const order = await Order.findAll({
        where: { buyer: user }, include: {
          model: OrderedProducts,
          attributes: ['product_id']
        }
      })

      //const products = []
      // This loops goes to Products table then translate id -> product_name - gambiarra, amanha resolvo (Foreign Key)
      /*for (let i = 0; i <= order.length; i++) {
        let productWithoutStrings = await Product.findOne({ where: { id: order[0].dataValues.OrderedProducts.dataValues[i].product_id } });
        products.push(productWithoutStrings)
      }*/

      const address = await UserAddress.findOne({ where: { user_id: user } })

      const lastOrder = order[order.length - 1]

      return res.json({
        lastOrder,
        address
      });
    } catch (error) {
      console.log(error)
      return res.json(null);
    }
  }


}

export default new OrderController();
