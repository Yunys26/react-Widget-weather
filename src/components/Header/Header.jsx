import React from 'react';
import './style-header.css';
import logo from '../../img/logo.svg'

const Header = (props) => {
    return (
        <header className="header">
            <img src={logo} className="header__logo" alt="logo" height="48px" width="48px"></img>
            <ul className="header__list">
            {/* Доделать релизацию ссылки якоря, если это будет актуально \
            https://www.npmjs.com/package/react-scrollable-anchor
            */}
                <div><a href="#form">Search Country</a></div>
                <div><a href="#tabs">Tab's</a></div>
                <div><a href="#table">Table</a></div>
            </ul>
        </header>
    );
};

export default Header;