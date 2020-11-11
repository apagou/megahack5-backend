import multer from 'multer';
import Product from '../models/Product';

import appConfig from '../config/appConfig';
import multerConfig from '../config/multer';

const upload = multer(multerConfig).single('product_photo');

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
        const url = `${appConfig.url}/images/${filename}`;

        const {
          productName, Price, Rating, P, M, G, GG, shop_id,
        } = req.body;

        const product = await Product.create({
          productName, Price, Rating, P, M, G, GG, url, shop_id,
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
    const { id } = req.params;
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
