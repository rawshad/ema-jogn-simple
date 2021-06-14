import React from 'react';
import '../Header/Header.css';
import logo from '../../images/logo.png'


const Header = () => {
    return (
        <div className="container-fluid">
            <div className="logo"><img src={logo} alt="LOGO" className="logo-img img-fluid" /></div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="shop">Shop</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="overview">Overview</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="inventory">Manage Inventory Here</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;