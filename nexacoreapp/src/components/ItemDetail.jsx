import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import ItemCount from "./ItemCount";
import { useCart } from "./Context/CartContext";

const ItemDetail = () => {
    const { id } = useParams();
    const [item, setItem] = useState(null);
    const [hasAdded, setHasAdded] = useState(false);
    const navigate = useNavigate();
    const { addItem } = useCart();

    useEffect(() => {
        const fetchItem = async () => {
            const db = getFirestore();
            const itemDoc = doc(db, "items", id);
            try {
                const docSnap = await getDoc(itemDoc);
                if (docSnap.exists()) {
                    setItem(docSnap.data());
                } else {
                    console.error("No such document!");
                }
            } catch (error) {
                console.error("Error fetching item: ", error);
            }
        };

        fetchItem();
    }, [id]);

    const handleAdd = (quantity) => {
        if (item) {
            addItem(item, quantity);
            setHasAdded(true);
        }
    };

    const handleCheckout = () => {
        navigate('/cart');
    };

    if (!item) return <p>Loading...</p>;

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                    <img src={item.imagen} alt={item.nombre} className="img-fluid rounded" />
                </div>
                <div className="col-md-6">
                    <h1 className="mb-3">{item.nombre}</h1>
                    <p className="mb-2"><b>Price:</b> ${item.precio}</p>
                    <p className="mb-4"><b>Description:</b> {item.descripcion}</p>
                    {hasAdded ? (
                        <button type="button" className="btn btn-dark rounded-pill" onClick={handleCheckout}>Terminar mi compra</button>
                    ) : (
                        <ItemCount stock={item.stock} onAdd={handleAdd} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;
