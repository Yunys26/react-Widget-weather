import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header className="header">
                <img className="header__logo" src="https://img.icons8.com/clouds/100/000000/temperature.png" width="200px" height="200px" alt="Weather" />
                {/* <img src={logo} className="header__logo" alt="logo" height="48px" width="48px"></img> */}
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
};

export default Header;