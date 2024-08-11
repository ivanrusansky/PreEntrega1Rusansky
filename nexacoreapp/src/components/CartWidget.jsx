import React from 'react';
import { useCart } from './Context/CartContext';
import { useNavigate } from 'react-router-dom';

const CartWidget = () => {
    const { cart } = useCart(); // Debe estar envuelto en un CartProvider
    const navigate = useNavigate(); // Hook para redireccionar

    if (!cart) return null; // Maneja el caso si `cart` es undefined

    // Calcula el total de ítems en el carrito
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

    // Maneja el clic en el botón del carrito
    const handleClick = () => {
        if (totalItems > 0) {
            navigate('/cart'); // Redirige al carrito si hay ítems
        }
    };

    return (
        <div>
            <button 
                type="button" 
                className="btn btn-light position-relative"
                onClick={handleClick} // Añade el manejador de clics
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

