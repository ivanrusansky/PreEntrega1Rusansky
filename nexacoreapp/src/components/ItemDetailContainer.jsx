import { useEffect, useState } from "react";
import arrayProductos from "../assets/json/productos.json"
import ItemDetail from "./ItemDetail";



const ItemDetailContainer = () =>{
    const [item, setItems] = useState({});

    useEffect(() => {
        const promesa = new Promise(resolve => {
            setTimeout(() => {
                resolve(arrayProductos.find(item => item.id === 2))
            }, 2000)

        })

        promesa.then(response => {
            setItems(response)

        })
    }, [])

    return (
        <div className="container">
            <div className="row">
                    <ItemDetail item={item}/>
            </div>
        </div>

    )
}


export default ItemDetailContainer