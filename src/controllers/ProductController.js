import multer from 'multer';
import Product from '../models/Product';

import appConfig from '../config/appConfig';
import multerConfig from '../config/multer';

const upload = multer(multerConfig).single('img_url');

class ProductController {
  store(req, res) {
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
          name, price, stars, size, shop_id,
        } = req.body;

        const product = await Product.create({
          name, img_url, price, stars, size, shop_id,
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

  async index(req, res) {
    const { shop_id } = req.query;
    try {
      const product = await Product.findAll({ where: { shop_id } });

      // const desiredProduct = product[id].dataValues

      return res.json({
        product,
      });
    } catch (error) {
      console.log(error);
      return res.json(null);
    }
  }

  async show(req, res) {
    const { id } = req.params;
    const { shop_id } = req.query;
    try {
      const product = await Product.findAll({ where: { shop_id } });

      const desiredProduct = product[id].dataValues;

      return res.json({
        desiredProduct,
      });
    } catch (error) {
      console.log(error);
      return res.json(null);
    }
  }
}

export default new ProductController();
