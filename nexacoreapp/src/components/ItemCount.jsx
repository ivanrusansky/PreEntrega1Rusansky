import { useState } from "react";
import Swal from "sweetalert2";

const ItemCount = ({ stock }) => {
    const [contador, setContador] = useState(1);
    const [itemStock, setItemStock] = useState(stock);

    const incrementar = () => {
        if (contador < itemStock) {
            setContador(contador + 1);
        }
    };

    const decrementar = () => {
        if (contador > 1) {
            setContador(contador - 1);
        }
    };

    const onAdd = () => {
        if (contador <= itemStock) {
            setItemStock(itemStock - contador);
            setContador (1);
            Swal.fire({
                title: '¡Listo!',
                text: '¡Tu producto se agregó al carrito exitosamente!',
                icon: 'success',
                confirmButtonText: 'Aceptar'
            });
        }
    };

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="btn-group" role="group">
                            <button type="button" className="btn btn-dark rounded-start-pill" onClick={decrementar}>-</button>
                            <button type="button" className="btn btn-dark">{contador}</button>
                            <button type="button" className="btn btn-dark rounded-end-pill" onClick={incrementar}>+</button>
                        </div>
                    </div>
                </div>
                <div className="row my-2">
                    <div className="col">
                        <button type="button" className="btn btn-dark rounded-pill" onClick={onAdd}>Agregar al Carrito</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ItemCount;
