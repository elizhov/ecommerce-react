import {useContext} from 'react';
import '../App.css';
import {CartContext} from "../contexts/cart-context.jsx";

const Cart = () => {
    const {cartItems, deleteFromCart, clearCart} = useContext(CartContext);

    const handleDelete = (id) => {
        deleteFromCart(id);
    }
    return (
        <div className="cart-page">
            <h1>Your Cart</h1>

            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div className="cart-items">
                    {cartItems.map(item => (
                        <div key={item.id} className="cart-item">
                            <img src={item.image} alt={item.title} />
                            <div>
                                <h3>{item.title}</h3>
                                <p>${item.price}</p>
                                <button onClick={() => handleDelete(item.id)}>Remove</button>
                            </div>
                        </div>
                    ))}
                    <button onClick={clearCart} className="clear-cart">Clear Cart</button>
                </div>
            )}
        </div>
    )

}

export default Cart;