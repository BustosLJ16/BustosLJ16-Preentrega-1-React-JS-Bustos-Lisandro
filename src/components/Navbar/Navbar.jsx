import './Navbar.css'
import React from 'react'
import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {
    return (
        <>
            <nav id="navbar" class="container my-1">
                <div className="row bg-secondary-subtle p-3 rounded">
                    <div className="col">
                        <a href="index.html">
                            <img src="https://imagenes.compragamer.com/assets/logos/logo-fix.png" className='d-flex justify-content-start' alt="Logo" width="252" />
                        </a>
                    </div>
                    <div className="col-5 d-flex align-items-center justify-content-center">
                        <ul className="nav p-2 bg-light rounded-pill">
                            <li className="nav-item">
                                <a className="nav-link text-dark" href="index.html">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark" href="#">Productos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark" href="#">Armar Pc</a>
                            </li>
                            <div className="dropdown nav-item">
                                <a className="dropdown-toggle nav-link text-dark" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Más Info
                                </a>
                                <ul className="dropdown-menu dropdown-menu-dark">
                                    <li><a className="dropdown-item  nav-link text-white" href="#">Nosotros</a></li>
                                    <li><a className="dropdown-item nav-link text-white" href="#">Ayuda</a></li>
                                    <li><a className="dropdown-item nav-link text-white" href="#">Cuenta de Usuario</a></li>
                                </ul>
                            </div>
                        </ul>
                    </div>
                    <CartWidget />
                </div>
            </nav>
        </>
    )
}

export default Navbar