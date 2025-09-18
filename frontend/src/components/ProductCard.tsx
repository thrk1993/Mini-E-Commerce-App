import React from 'react';
import { useCart } from '../context/CartContext';

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const { addToCart } = useCart();

    return (
        <div className="border rounded-lg shadow p-4 flex flex-col items-center">
            <img src={product.image} alt={product.name} className="w-32 h-32 object-cover" />
            <h3 className="mt-2 font-bold">{product.name}</h3>
            <p className="text-gray-600">${product.price}</p>
            <button onClick={() => addToCart(product)} className="mt-2 bg-blue-500 text-white px-4 py-1 rounded">
                Add to Cart
            </button>
        </div>
    );
};

type ProductCardProps = {
    product: IProduct;
};

export default ProductCard;
