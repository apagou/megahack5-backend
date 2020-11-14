import CreditCard from '../models/CreditCard';
import Order from '../models/Order';
import OrderedProducts from '../models/OrderedProducts';
import Product from '../models/Product';
import Shop from '../models/Shop';
import UserAddress from '../models/UserAddress';

class OrderController {
  async store(req, res) {
    const { userId } = req;

    // Product list must be like -> [{"product_id": 1, "amount": 1, "price": 1}, {...}]
    const {
      shop_id, status, freight, productList, address, cred_id,
    } = req.body;

    console.log(productList);

    const lastOrder = await Order.create({
      shop_id, status, freight, user_id: userId, address, cred_id,
    });

    const ordered_products = [];

    // Convert the product list received to an array that can be sent to the database
    productList.map((product) => {
      ordered_products.push({
        user_id: userId, product_id: product.id, amount: 1, order_id: lastOrder.id, price: product.price,
      });
    });

    await OrderedProducts.bulkCreate(ordered_products);

    return res.json({
      shop_id, status, freight, userId, productList, address,
    });
  }

  // Find last order by user
  async index(req, res) {
    const { userId } = req;

    try {
      const order = await Order.findAll({
        where: { user_id: userId },
        include: {
          model: Shop,
          attributes: ['name', 'img_url'],
        },
      });

      const renderOrder = (order) => {
        const orderView = {
          id: order.id,
          date: order.created_at,
          shop_name: order.Shop.name,
          shop_img_url: order.Shop.img_url,
          status: order.status,
        };
        return orderView;
      };

      const orders = order.map((currentOrder) => renderOrder(currentOrder));

      return res.json(
        orders,
      );
    } catch (error) {
      console.log(error);
      return res.json(null);
    }
  }

  async findOne(req, res) {
    const { userId } = req;
    const { id } = req.params;

    const order = await Order.findByPk(id, {
      include: [
        {
          model: Shop,
          attributes: ['name'],
        },
        {
          model: OrderedProducts,
          attributes: ['product_id', 'price'],
          include: {
            model: Product,
            attributes: ['id', 'name', 'img_url', 'size', 'stars'],
          },
        },
        {
          model: CreditCard,
          attributes: ['owner_name', 'last_digits'],
        },
      ],
    });

    console.log(order);

    const renderOrder = (order) => {
      const orderView = {
        id: order.id,
        shop_name: order.Shop.name,
        status: order.status,
        freight: order.freight,
        date: order.created_at,
        products: order.OrderedProducts.map((orderedProduct) => ({
          id: orderedProduct.product_id,
          price: orderedProduct.price,
          name: orderedProduct.Product.name,
          img_url: orderedProduct.Product.img_url,
          size: orderedProduct.Product.size,
          stars: orderedProduct.Product.stars,
        })),
        credit_card: order.CreditCard,
      };

      return orderView;
    };

    res.json(renderOrder(order));
  }
}

export default new OrderController();
