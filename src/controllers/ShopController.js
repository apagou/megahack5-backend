import Shop from '../models/Shop';
import Products from '../models/Product';

class ShopController {
  async create(req, res) {
    const newShop = await Shop.create(req.body);

    const {
      id, shop, where_is_located, open, close,
    } = newShop;

    return res.json({
      id, shop, where_is_located, open, close,
    });
  }

  // Index - Show All
  async index(req, res) {
    try {
      const shops = await Shop.findAll();
      return res.json({
        shops,
      });
    } catch (error) {
      return res.json(null);
    }
  }

  // Show - to do -> Show all products from a specific store
  async show(req, res) {
    const { id } = req.params;

    try {
      const shop = await Shop.findOne({ where: { id } });
      const products = await Products.findAll({ where: { shopId: id } });
      return res.json({
        shop,
        products,
      });
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}

export default new ShopController();
