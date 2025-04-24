import {useContext, useState} from 'react';
import '../App.css';
import {CartContext} from "../contexts/cart-context.jsx";

const Product = ({ id, title, price, description, category, image }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const { addToCart, isInCart } = useContext(CartContext);

    const handleAddToCart = () => {
        addToCart({ id, title, price, description, category, image });
    };

    const toggleDescription = () => {
        setIsExpanded(prev => !prev);
    };

    return (
        <div className="product-card" key={id}>
            <img src={image} alt={title} className="product-image" />
            <div className="product-info">
                <h2 className="product-title">{title}</h2>
                <p className="product-price">${price}</p>
                <p className="product-category">{category}</p>
                <p className="product-description">
                    {isExpanded ? description : description?.slice(0, 50) + '...'}
                    <span
                        className="expand-toggle"
                        onClick={toggleDescription}
                    >
                        {isExpanded ? ' Show Less' : '... Show More'}
                    </span>
                </p>
                <button className="add-to-cart-button"
                        onClick={handleAddToCart}
                        disabled={isInCart(id)}
                >
                    {isInCart(id) ? 'Added to Cart' : 'Add to Cart'}
                </button>
            </div>
        </div>
    );
};

export default Product;
