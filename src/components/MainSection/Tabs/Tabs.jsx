import React from 'react';
import './style-tabs.css';
import { NavLink, Route } from 'react-router-dom';

const Tabs = (props) => {
    return (
        // Додумать как табсы будут отображться при роутинге на компоненты
        // Сделать их по отдельности или меняться в зависимости от пропса
        <div className="tabs">
            <NavLink to="/all">Все</NavLink>
            <NavLink to="/active">Активные</NavLink>
            <NavLink to="/deleted">Удаленные</NavLink>
            <div>
                <Route path="/all"/>
                <Route path="/active"/>
                <Route path="/deleted"/>
            </div>
        </div>
    );
};
export default Tabs;