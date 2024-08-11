import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    // Agrega un item al carrito o actualiza la cantidad si ya existe
    const addToCart = (item, quantity) => {
        setCart(prevCart => {
            const existingItem = prevCart.find(i => i.id === item.id);
            if (existingItem) {
                return prevCart.map(i =>
                    i.id === item.id
                        ? { ...i, quantity: i.quantity + quantity }
                        : i
                );
            }
            return [...prevCart, { ...item, quantity }];
        });
    };

    // Elimina un item del carrito por su ID
    const removeItem = (itemId) => {
        setCart(prevCart => prevCart.filter(item => item.id !== itemId));
    };

    // Limpia el carrito
    const clear = () => {
        setCart([]);
    };

    // Devuelve el carrito
    const getCart = () => {
        return cart;
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeItem, clear, getCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);

