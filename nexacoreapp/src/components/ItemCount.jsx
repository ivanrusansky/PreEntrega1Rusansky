// ItemCount.jsx
import { useState } from "react";
import Swal from "sweetalert2";
import { useCart } from "./Context/CartContext";

const ItemCount = ({ item, stock }) => {
    const [contador, setContador] = useState(1);
    const { addToCart } = useCart();

    const incrementar = () => {
        if (contador < stock) {
            setContador(contador + 1);
        }
    };

    const decrementar = () => {
        if (contador > 1) {
            setContador(contador - 1);
        }
    };

    const onAdd = () => {
        if (contador <= stock) {
            addToCart(item, contador); // Usa addToCart del contexto
            setContador(1); // Restablece el contador
            Swal.fire({
                title: '¡Listo!',
                text: `¡Has agregado ${contador} ${item.nombre} al carrito exitosamente!`,
                icon: 'success',
                confirmButtonText: 'Aceptar'
            });
        } else {
            Swal.fire({
                title: 'Stock insuficiente',
                text: `Solo quedan ${stock} en stock.`,
                icon: 'error',
                confirmButtonText: 'Aceptar'
            });
        }
    };

    return (
        <div className="container my-4">
            <div className="row">
                <div className="col text-center">
                    <div className="btn-group" role="group">
                        <button
                            type="button"
                            className="btn btn-dark rounded-start-pill"
                            onClick={decrementar}
                            disabled={contador <= 1}
                        >
                            -
                        </button>
                        <button
                            type="button"
                            className="btn btn-dark"
                        >
                            {contador}
                        </button>
                        <button
                            type="button"
                            className="btn btn-dark rounded-end-pill"
                            onClick={incrementar}
                            disabled={contador >= stock}
                        >
                            +
                        </button>
                    </div>
                </div>
            </div>
            <div className="row my-2">
                <div className="col text-center">
                    <button
                        type="button"
                        className="btn btn-dark rounded-pill"
                        onClick={onAdd}
                    >
                        Agregar al Carrito
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ItemCount;
