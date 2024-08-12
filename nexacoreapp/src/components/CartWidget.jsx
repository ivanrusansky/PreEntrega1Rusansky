import React from 'react';
import { useCart } from './Context/CartContext';
import { useNavigate } from 'react-router-dom';

const CartWidget = () => {
    const { cart } = useCart();
    const navigate = useNavigate();

    if (!cart) return null;


    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);


    const handleClick = () => {
        if (totalItems > 0) {
            navigate('/cart');
        }
    };

    return (
        <div>
            <button
                type="button"
                className="btn btn-light position-relative"
                onClick={handleClick}
            >
                <img src="images/bag-dash-fill.svg" alt="carrito" width={20} />
                {totalItems > 0 && (
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        {totalItems}
                        <span className="visually-hidden">items in cart</span>
                    </span>
                )}
            </button>
        </div>
    );
};

export default CartWidget;
