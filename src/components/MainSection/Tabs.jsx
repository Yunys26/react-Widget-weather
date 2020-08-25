import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import { observer } from 'mobx-react';
import store from '../../store/store';

class Tabs extends Component {
    
    render () {
        return (
            // Додумать как табсы будут отображться при роутинге на компоненты
            // Сделать их по отдельности или меняться в зависимости от пропса
            <div className="tabs" name="tabs">
                <NavLink to="/all" className="tabsNav">
                    <input type="radio" defaultValue="" className="tabsBt" defaultChecked/>
                    <label htmlFor="">All</label>
                </NavLink>
                <NavLink to="/active" className="tabsNav">
                    <input type="radio" defaultValue="" className="tabsBt" />
                    <label htmlFor="">Active</label>
                </NavLink>
                <NavLink to="/deleted" className="tabsNav">
                    <input type="radio" defaultValue="" className="tabsBt" />
                    <label htmlFor="">Deleted</label>
                </NavLink>
                {/* <div> */}
                <Route path="/all">
                    <div className="tabsСontentAll">
                        {store.addTabsCityAll}
                    </div>
                </Route>
                <Route path="/active">
                    <div className="tabsContentActive">
                        {store.addTabsActive}
                    </div>
                </Route>
                <Route path="/deleted">
                    <div className="tabsContentDeleted">
                        {store.addTabsDelete}
                    </div>
                </Route>
            </div>
        );
    };
};

export default observer(Tabs);