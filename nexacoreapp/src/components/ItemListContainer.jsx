import React from 'react';
import { useEffect, useState } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const { categoryId } = useParams();

    useEffect(() => {
        const fetchItems = async () => {
            const db = getFirestore();
            const itemsCollection = collection(db, "items");
            try {
                const snapshot = await getDocs(itemsCollection);
                const itemsList = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }));

                
                const filteredItems = categoryId
                    ? itemsList.filter(item => item.categoria === categoryId)
                    : itemsList;

                setItems(filteredItems);
            } catch (error) {
                console.error("Error fetching documents: ", error);
            }
        };

        fetchItems();
    }, [categoryId]); 

    return (
        <div className="container">
            <div className="row">
                {items.map((item) => (
                    <div className="col-md-4 mb-3" key={item.id}>
                        <div className="card border-0">
                            <Link to={"/item/" + item.id}>
                                <img src={item.imagen} className="card-img-top" alt={item.nombre} />
                            </Link>
                            <div className="card-body">
                                <p className="card-text"><b>{item.nombre}</b></p>
                                <p className="card-text"><b>${item.precio}</b></p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ItemListContainer;
