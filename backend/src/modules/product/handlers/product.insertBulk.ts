import products from '../../../data/products';
import Product from '../product.model';

const insertBulk = async (req: any, res: any) => {
    try {
        await Product.deleteMany();
        const created = await Product.insertMany(products);
        return res.status(200).json({ created, message: 'Bulk insert successful' });
    } catch (error) {
        res.status(500).json({ message: `Error on insert products` });
    }
};

export default insertBulk;
