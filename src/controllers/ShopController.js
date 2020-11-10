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
  }
}

export default new ShopController();
