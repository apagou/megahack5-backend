import multer from 'multer'

import Shop from '../models/Shop';
import Products from '../models/Product';

import appConfig from '../config/appConfig';
import multerConfig from '../config/multer';

const upload = multer(multerConfig).single('img_url');

class ShopController {
  async create(req, res) {
    return upload(req, res, async (error) => {
      if (error) {
        return res.status(400).json({
          errors: [error.code],
        });
      }
      try {
        const { filename } = req.file;
        const img_url = `${appConfig.url}/images/${filename}`;

        const {
          id, name, open, close,lat,long
        } = req.body;

        const product = await Shop.create({
          id, name, open, close,lat,long,img_url
        });

        return res.json(product);
      } catch (e) {
        console.log(e);
        return res.status(400).json({
          errors: [e],
        });
      }
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
  
  /*async show(req, res) {
    const { id } = req.params;

    try {
      const shop = await Shop.findByPk(id, {
        attributes: ['id','name','open','close','img_url','lat','long'],
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
  */
}

export default new ShopController();
