import Shop from '../models/Shop';

class ShopController {
  async create(req, res) {
    const newShop = await Shop.create(req.body);

    const {
      id, shop, whereIsLocated, open, close,
    } = newShop;

    return res.json({
      id, shop, whereIsLocated, open, close,
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
    // todo
  }
}

export default new ShopController();
