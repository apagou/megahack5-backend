import Product from '../models/Product';

class ProductController {
    async create(req, res) {
        const newProduct = await Product.create(req.body);

        const {
            id, productName, Price, Rating, P, M, G, GG,
        } = newProduct;

        return res.json({
            id, productName, Price, Rating, P, M, G, GG,
        });
    }
}

export default new ProductController();
