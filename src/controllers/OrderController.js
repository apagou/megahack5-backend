import Order from '../models/Order';
import OrderedProducts from '../models/OrderedProducts'

class OrderController {
  async store(req, res) {
    const { requested_shop, order_status, amount, buyer, productList} = req.body

    const newOrder = await Order.create({ requested_shop, order_status, amount, buyer})

  const ordered_products = []
    productList.map((product) => {
      ordered_products.push({user_id: buyer, product_id: product.product_id, amount: product.amount})
    })

   await OrderedProducts.bulkCreate(ordered_products)

    return res.json({
      requested_shop, order_status, amount, buyer, productList
    });
  }

 /* // Index - Show All
  async index(req, res) {
    try {
      const shops = await Shop.findAll()
      return res.json({
        shops,
      });
    } catch (error) {
      console.log(error)
      return res.json(null);
    }
  }

  // Show - to do -> Show all products from a specific store
  async show(req, res) {
    const { id } = req.params;

    try {
      const shop = await Shop.findByPk(id, {
        attributes: ['shop', 'where_is_located','open','close'],
        include:{
          model: Products,
          attributes: ['productName', 'Price', 'Rating', 'P','M','G','GG', 'url']
        }
      })
      return res.json({
        shop,
      });
    } catch (error) {
      console.log(error);
      return null;
    }
  }*/
}

export default new OrderController();
