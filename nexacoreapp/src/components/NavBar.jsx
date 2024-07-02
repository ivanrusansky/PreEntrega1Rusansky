import CartWidget from "./CartWidget"

const NavBar = () => {
    return (
        <div className="container my-3">
            <div className="row">
                <div className="col">
                    <img src="images/logo.jpg" alt="NexaCore" width={60} />
                </div>
                <div className="col">
                    <ul className="nav justify-content-center">
                        
                        <li className="nav-item">
                            <a className="nav-link text-black" href="#">Celulares</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-black" href="#">Computadoras</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-black" href="#">Tablets</a>
                        </li>
                    </ul>
                </div>
                <div className="col text-end">
                    <CartWidget />
                </div>
            </div>
        </div>

    )
}

export default NavBar