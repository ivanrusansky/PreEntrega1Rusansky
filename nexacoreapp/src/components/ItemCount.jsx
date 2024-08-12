import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const ItemCount = ({ stock, onAdd }) => {
    const [contador, setContador] = useState(1);
    const [itemStock, setItemStock] = useState(10);
    const [hasAdded, setHasAdded] = useState(false);
    const navigate = useNavigate();

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

    const handleAdd = () => {
        if (contador <= itemStock) {
            setItemStock(itemStock - contador);
            setContador(1);
            onAdd(contador);
            setHasAdded(true);
            Swal.fire({
                title: '¡Listo!',
                text: '¡Tu producto se agregó al carrito exitosamente!',
                icon: 'success',
                confirmButtonText: 'Aceptar'
            });
        } else {
            Swal.fire({
                title: 'Cantidad inválida',
                text: 'No hay suficiente stock para esta cantidad.',
                icon: 'error',
                confirmButtonText: 'Aceptar'
            });
        }
    };

    const handleCheckout = () => {
        navigate('/cart');
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    {!hasAdded ? (
                        <div className="btn-group" role="group">
                            <button type="button" className="btn btn-dark rounded-start-pill" onClick={decrementar}>-</button>
                            <button type="button" className="btn btn-dark">{contador}</button>
                            <button type="button" className="btn btn-dark rounded-end-pill" onClick={incrementar}>+</button>
                        </div>
                    ) : (
                        <div>
                            <button type="button" className="btn btn-success rounded-pill" onClick={handleCheckout}>Finalizar Compra</button>
                            <button type="button" className="btn btn-secondary rounded-pill ms-2" onClick={() => setHasAdded(false)}>Seguir Comprando</button>
                        </div>
                    )}
                </div>
            </div>
            <div className="row my-2">
                <div className="col">
                    {!hasAdded && (
                        <button type="button" className="btn btn-dark rounded-pill" onClick={handleAdd}>Agregar al Carrito</button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ItemCount;
