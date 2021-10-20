import React from 'react';
import css from './Navbar.module.css';
import { NavLink } from 'react-router-dom';



export const Navbar = () => {

    return (
        <div className={css.navbar}>
            <div className={css.nav_button}><NavLink to="/profile" activeClassName={css.active}>Profile</NavLink></div>
            <div className={css.nav_button}><NavLink to="/dialogs" activeClassName={css.active}>Messages</NavLink></div>
            <div className={css.nav_button}>News</div>
            <div className={css.nav_button}>Music</div>
            <div className={css.nav_button}>Settings</div>
        </div>
    )

}
