import React from 'react';
import style from './style-tabs.module.css';
import { NavLink, Route } from 'react-router-dom';

const Tabs = (props) => {
    return (
        // Додумать как табсы будут отображться при роутинге на компоненты
        // Сделать их по отдельности или меняться в зависимости от пропса
        <div className={style.tabs} name="tabs">
            <NavLink to="/all" className={style.tabsNav}>
                <input type="radio" value="" className={style.tabsBtn} checked/>
                <label for={style.tabsBtn}>All</label>
            </NavLink>
            <NavLink to="/active" className={style.tabsNav}>
                <input type="radio" value="" className={style.tabsBtn}/>
                <label for={style.tabsBtn}>Active</label>
            </NavLink>
            <NavLink to="/deleted" className={style.tabsNav}>
                <input type="radio" value="" className={style.tabsBtn}/>
                <label for={style.tabsBtn}>Deleted</label>
            </NavLink>
            {/* <div> */}
                <Route path="/all">
                    <div className={style.tabsСontentAll}>
                        All
                    </div>
                </Route>
                <Route path="/active">
                    <div className={style.tabsContentActive}>
                        Active
                    </div>
                </Route>
                <Route path="/deleted">
                    <div className={style.tabsContentDeleted}>
                        Deleted
                    </div>
                </Route>
            {/* </div> */}
        </div>
    );
};

export default Tabs;