import React from 'react';
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <nav className="navbar navbar-dark">
            <Link to="/" className="navbar-brand">
                <img src= { logo } width="30" height="30" className="d-inline-block align-top" alt="" />
                Dog Breeds
            </Link>
        </nav>
    )
}

export default Header;