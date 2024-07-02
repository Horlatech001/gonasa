import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../../images/logo.png";
import "./navbar.css"
const Navbar = ({ getSenators, getHor, getGovernors }) => {
    return (
        <nav className="navbar navbar-expand-lg shadow-sm nav_bar">
            <div className="container-fluid">
                <Link to="/">
                    <img src={Logo} alt="logo" className='logo'/>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 navbar_ul">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/governor" onClick={() => getGovernors()}>Governors</Link>
                        </li>
                        <li className="nav-item dropdown hover-dropdown">
                            <Link className="nav-link dropdown-toggle" to="#" id="horDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Senators
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="horDropdown">
                                <li><Link className="dropdown-item" to="/senator" onClick={() => getSenators(23)}>8th Assembly</Link></li>
                                <li><Link className="dropdown-item" to="/senator" onClick={() => getSenators(24)}>9th Assembly</Link></li>
                                <li><Link className="dropdown-item" to="/senator" onClick={() => getSenators(25)}>10th Assembly</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown hover-dropdown">
                            <Link className="nav-link dropdown-toggle" to="#" id="horDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Member, HOR
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="horDropdown">
                                <li><Link className="dropdown-item" to="/hor" onClick={() => getHor(23)}>8th Assembly</Link></li>
                                <li><Link className="dropdown-item" to="/hor" onClick={() => getHor(24)}>9th Assembly</Link></li>
                                <li><Link className="dropdown-item" to="/hor" onClick={() => getHor(25)}>10th Assembly</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/assembly">State Assembly</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar