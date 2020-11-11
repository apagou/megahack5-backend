import Order from '../models/Order';
import OrderedProducts from '../models/OrderedProducts'
import Product from '../models/Product';

class OrderController {
  async store(req, res) {


    // Product list must be like -> [{"product_id": 1, "amount": 1}, {...}] 
    const { requested_shop, order_status, amount, buyer, productList} = req.body

   await Order.create({ requested_shop, order_status, amount, buyer})

  const lastOrder =  await Order.findAll({
    limit: 1,
    order: [ [ 'created_at', 'DESC' ]]
  })

  const ordered_products = []
    productList.map((product) => {
      ordered_products.push({user_id: buyer, product_id: product.product_id, amount: product.amount, order_id: lastOrder[0].id})
    })

   await OrderedProducts.bulkCreate(ordered_products)

    return res.json({
      requested_shop, order_status, amount, buyer, productList
    });
  }

  // Find current order by user
  async index(req, res) {
    const { user } =  req.query;

    try {
      const order = await Order.findOne({where: {buyer: user},include:{
        model: OrderedProducts,
        attributes: ['product_id']
      }})

      const products = []

      for(let i = 0; i <= order.OrderedProducts.length - 1; i++){
        let productWithoutStrings = await Product.findOne({where: {id: order.OrderedProducts[i].product_id}});
        products.push(productWithoutStrings)

      }
      //const product = await Product.findOne({where: {product_id: order.OrderedProducts.product_id}})

      return res.json({
        order,
        products
      });
    } catch (error) {
      console.log(error)
      return res.json(null);
    }
  }

  // Show - to do -> Show all products from a specific store
  /*async show(req, res) {
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
