import React from 'react';
import './style-header.css';
import logo from '../../img/logo.svg'

const Header = (props) => {
    return (
        <header className="header">
            <img src={logo} className="header__logo" alt="logo" height="48px" width="48px"></img>
            <ul className="header__list">
                <div><a href="#1">Search Country</a></div>
                <div><a href="#1">Tab's</a></div>
                <div><a href="#1">Table</a></div>
            </ul>
        </header>
    );
};

export default Header;