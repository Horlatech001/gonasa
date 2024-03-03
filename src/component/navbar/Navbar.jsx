import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../../images/logo.png";
import Hamburger from "../../images/Vector.png";
import "./navbar.css"
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg shadow-sm nav_bar">
            <div className="container-fluid">
                <img src={Logo} alt="logo" className='logo'/>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 navbar_ul">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="#">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Senator</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Member,HOR</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">State Assembly</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">All State</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">
                                <img src={Hamburger} alt="hamburger" />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar