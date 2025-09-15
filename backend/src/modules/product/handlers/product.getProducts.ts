import Product, { IProduct } from '../product.model';

const getProducts = async (req: any, res: any) => {
    try {
        const products: IProduct[] = await Product.find();
        return res.status(200).json({ products });
    } catch (error) {
        res.status(404).json({ message: `No Products found` });
    }
};

export default getProducts;
