import { useEffect, useState } from "react";
import arrayProductos from "../assets/json/productos.json"
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";



const ItemDetailContainer = () =>{
    const [item, setItem] = useState({});
    const {id} = useParams ();


    useEffect(() => {
        const promesa = new Promise(resolve => {
            setTimeout(() => {
                resolve(arrayProductos.find(item => item.id == id))
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