// Footer.jsx
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-dark text-light py-4">
            <div className="container">
                <div className="row">
                    
                    <div className="col-md-4">
                        <h5>Sobre Nosotros</h5>
                        <p>Nexacore es tu tienda de confianza para celulares, computadoras y tablets. Nos comprometemos a ofrecerte productos de tecnología de última generación con un servicio excepcional. ¡Explora nuestras ofertas y encuentra lo que necesitas!</p>
                    </div>

                    
                    <div className="col-md-4">
                        <h5>Contacto</h5>
                        <ul className="list-unstyled">
                            <li>Dirección: Av. Corrientes 1234, C1043AAR, Buenos Aires, Argentina</li>
                            <li>Teléfono: +54 9 11 2345-6789</li>
                            <li>Email: <a href="mailto:info@nexacore.com">info@nexacore.com</a></li>
                        </ul>
                    </div>

                    
                    <div className="col-md-4">
                        <h5>Podes seguirnos en</h5>
                        <ul className="list-unstyled d-flex">
                            <li className="me-3">
                                <a href="" target="_blank" rel="noopener noreferrer">
                                    Facebook
                                </a>
                            </li>
                            <li className="me-3">
                                <a href="" target="_blank" rel="noopener noreferrer">
                                    Instagram
                                </a>
                            </li>
                            <li className="me-3">
                                <a href="" target="_blank" rel="noopener noreferrer">
                                    X
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="text-center mt-3">
                    <p>&copy; {new Date().getFullYear()} Nexacore. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;