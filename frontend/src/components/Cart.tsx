import React from 'react';
import { useCart } from '../context/CartContext';

const Cart: React.FC<CartProps> = () => {
    const { cart, removeFromCart } = useCart();

    return (
        <div className="border p-4 rounded shadow w-72">
            <h2 className="text-lg font-bold mb-2">Cart</h2>
            {cart.length === 0 && <p>No items in cart</p>}
            {cart.map((item) => (
                <div key={item._id} className="flex justify-between mb-2">
                    <span>
                        {item.name} x {item.quantity}
                    </span>
                    <button onClick={() => removeFromCart(item._id as string)} className="text-red-500">
                        Remove
                    </button>
                </div>
            ))}
        </div>
    );
};

type CartProps = {};

export default Cart;
