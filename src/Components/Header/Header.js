import React from 'react';
import logo from '../../Logo.png'
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <Link className="navbar-brand" to="/home">
                <img src={logo} alt=""/>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <form className="form-inline">
                <input className="form-control mr-sm-2" type="search" placeholder="Search Your Destination" aria-label="Search"/>
               </form>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link className="nav-link text-white" to="news">News <span className="sr-only">(current)</span></Link>
                    <Link className="nav-link text-white" to="destination">Destination</Link>
                    <Link className="nav-link text-white" to="blog">Blog</Link>
                    <Link  className="nav-link text-white" to="contract">Contract</Link>
                    <Link to="login">
                        <button className="nav-link button text-white">Login</button>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Header;