import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget"; // Añade esta línea para importar CartWidget

const NavBar = () => {
    return (
        <div className="container my-3">
            <div className="row">
                <div className="col">
                    <Link to={"/"}>
                        <img src="images/logo.jpg" alt="NexaCore" width={60} />
                    </Link>
                </div>
                <div className="col">
                    <ul className="nav justify-content-center">
                        
                        <li className="nav-item">
                            <NavLink to={"/category/celulares"} className="nav-link text-black">Celulares</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={"/category/computadoras"} className="nav-link text-black">Computadoras</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={"/category/tablets"} className="nav-link text-black">Tablets</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="col text-end">
                    <CartWidget /> {}
                </div>
            </div>
        </div>
    );
};

export default NavBar;
