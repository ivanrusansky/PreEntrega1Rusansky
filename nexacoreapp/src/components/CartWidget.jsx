const CartWidget = () => {
    return (
        <div>

            <button type="button" className="btn btn-light position-relative">
            <img src="images/bag-dash-fill.svg" alt="carrito" width={20} />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    1
                    <span className="visually-hidden">unread messages</span>
                </span>
            </button>
        </div>
    )
}

export default CartWidget