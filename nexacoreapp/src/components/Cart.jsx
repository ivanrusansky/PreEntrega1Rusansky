import React from 'react';
import { useCart } from './Context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart, clear, removeItem } = useCart();


    const totalPrice = cart.reduce((total, item) => total + (item.precio * item.quantity), 0);

    console.log('Current cart:', cart);

    return (
        <div className="container mt-5">
            {cart.length === 0 ? (
                <div className="text-center">
                    <h2>Tu carrito está vacío</h2>
                    <Link to="/" className="btn btn-dark">Volver a la tienda</Link>
                </div>
            ) : (
                <>
                    <h2 className="mb-4">Carrito de compras</h2>
                    <div className="table-responsive">
                        <table className="table table-striped table-bordered">
                            <thead className="table-dark">
                                <tr>
                                    <th>Producto</th>
                                    <th>Imagen</th>
                                    <th>Precio</th>
                                    <th>Cantidad</th>
                                    <th>Total</th>
                                    <th>Eliminar</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map((item) => (
                                    <tr key={item.id}>
                                        <td>{item.nombre}</td>
                                        <td>
                                            <img
                                                src={item.imagen}
                                                alt={item.nombre}
                                                className="img-fluid"
                                                style={{ maxWidth: '100px' }}
                                            />
                                        </td>
                                        <td>${item.precio.toFixed(2)}</td>
                                        <td>{item.quantity}</td>
                                        <td>${(item.precio * item.quantity).toFixed(2)}</td>
                                        <td>
                                            <button
                                                className="btn btn-danger"
                                                onClick={() => removeItem(item.id)}
                                            >
                                                Eliminar
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mt-3">
                        <h4>Total: ${totalPrice.toFixed(2)}</h4>
                        <div>
                            <button className="btn btn-danger me-2" onClick={clear}>
                                Vaciar carrito
                            </button>
                            <Link to="/checkout" className="btn btn-success">Ir a Checkout</Link>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Cart;

