import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import ProductCard from './components/ProductCard';
import Cart from './components/Cart';
import { CartProvider } from './context/CartContext';

function App() {
    const [products, setProducts] = useState<IProduct[]>([]);

    useEffect(() => {
        axios
            .get('http://localhost:5000/api/product/getProducts')
            .then((res) => setProducts(res.data.products))
            .catch((err) => console.error(err));
    }, []);

    return (
        <CartProvider>
            <div className="min-h-screen p-6 bg-gray-100 flex">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 flex-1">
                    {products.map((product) => (
                        <ProductCard key={product._id} product={product} />
                    ))}
                </div>
                <div className="ml-6">
                    <Cart />
                </div>
            </div>
        </CartProvider>
    );
}

export default App;
