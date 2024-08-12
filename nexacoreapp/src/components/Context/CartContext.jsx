import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);


    const addToCart = (item, quantity) => {
        console.log('Adding to cart:', item, quantity);

        setCart(prevCart => {
            const existingItem = prevCart.find(i => i.id === item.nombre);
            if (existingItem) {
                const updatedCart = prevCart.map(i =>
                    i.id === item.id
                        ? { ...i, quantity: i.quantity + quantity }
                        : i
                );
                console.log('Updated cart with existing item:', updatedCart);
                return updatedCart;
            }
            const newCart = [...prevCart, { ...item, quantity }];
            console.log('New cart with new item:', newCart);
            return newCart;
        });
    };


    const removeItem = (itemId) => {
        console.log('Removing item with id:', itemId);

        setCart(prevCart => {
            const updatedCart = prevCart.filter(item => item.id !== itemId);
            console.log('Updated cart after removal:', updatedCart);
            return updatedCart;
        });
    };


    const clear = () => {
        console.log('Clearing the cart');

        setCart([]);
    };


    const getCart = () => {
        console.log('Getting cart:', cart);
        return cart;
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeItem, clear, getCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
