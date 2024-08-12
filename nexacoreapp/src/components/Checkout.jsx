import React, { useState } from 'react';
import { useCart } from './Context/CartContext';
import { getFirestore, collection, addDoc, doc, updateDoc, getDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const generateOrderId = () => {
    const timestamp = Date.now().toString();
    const randomNum = Math.floor(Math.random() * 1000).toString();
    return `${timestamp}-${randomNum}`;
};

const Checkout = () => {
    const { cart, clear } = useCart();
    const [buyer, setBuyer] = useState({ name: '', phone: '', email: '' });
    const [orderId, setOrderId] = useState('');
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setBuyer({ ...buyer, [e.target.name]: e.target.value });
    };

    const handleCheckout = async (e) => {
        e.preventDefault();


        const total = cart.reduce((acc, item) => acc + item.precio * item.quantity, 0);


        const internalOrderId = generateOrderId();


        const order = {
            orderId: internalOrderId,
            buyer,
            items: cart.map(item => ({ id: item.id, title: item.nombre, price: item.precio, quantity: item.quantity })),
            date: new Date(),
            total
        };

        try {
            const db = getFirestore();
            const ordersCollection = collection(db, 'orders');


            for (const item of cart) {
                const itemDocRef = doc(db, 'items', item.id);
                const itemDocSnap = await getDoc(itemDocRef);

                if (itemDocSnap.exists()) {
                    const itemData = itemDocSnap.data();
                    const stockActual = itemData.stock;

                    if (stockActual >= item.quantity) {
                        await updateDoc(itemDocRef, { stock: stockActual - item.quantity });
                    } else {
                        throw new Error(`Stock insuficiente para ${item.nombre}`);
                    }
                } else {
                    throw new Error(`El producto ${item.nombre} no existe en la base de datos.`);
                }
            }


            await addDoc(ordersCollection, order);


            setOrderId(internalOrderId);


            clear();
            alert(`Compra realizada con éxito. Tu ID de orden es: ${internalOrderId}`);
            navigate('/');
        } catch (error) {
            console.error('Error al procesar la compra: ', error);
            alert('Ocurrió un error al procesar la compra.');
        }
    };

    return (
        <div className="container mt-5">
            <h2>Checkout</h2>
            <form onSubmit={handleCheckout}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Nombre</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={buyer.name}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Teléfono</label>
                    <input
                        type="tel"
                        className="form-control"
                        id="phone"
                        name="phone"
                        value={buyer.phone}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Correo electrónico</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={buyer.email}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Finalizar Compra</button>
            </form>
            {orderId && <div className="alert alert-success mt-4">Tu ID de orden es: {orderId}</div>}
        </div>
    );
};

export default Checkout;
