import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {
        const fetchItem = async () => {
            const db = getFirestore();
            const itemDoc = doc(db, "items", id);
            try {
                const docSnap = await getDoc(itemDoc);
                if (docSnap.exists()) {
                    setItem({ id: docSnap.id, ...docSnap.data() });
                } else {
                    console.log("No such document!");
                }
            } catch (error) {
                console.error("Error fetching document: ", error);
            }
        };

        fetchItem();
    }, [id]);

    if (!item) return <div>Loading...</div>;

    return (
        <div className="container mt-4 mb-5">
            <div className="row">
                <div className="col-md-6">
                    <img src={item.imagen} alt={item.nombre} className="img-fluid item-image" />
                </div>
                <div className="col-md-6">
                    <h2 className="item-title">{item.nombre}</h2>
                    <p className="item-price"><b>${item.precio}</b></p>
                    <p className="item-description">{item.descripcion}</p>
                </div>
            </div>
        </div>
    );
};

export default ItemDetailContainer;
