import React from 'react';
import css from './Navbar.module.css';



export const Navbar = () => {

    return (
        <div className={css.navbar}>
            <div className={css.nav_button}><a href="/profile">Profile</a></div>
            <div className={css.nav_button}><a href="/dialogs">Messages</a></div>
            <div className={css.nav_button}>News</div>
            <div className={css.nav_button}>Music</div>
            <div className={css.nav_button}>Settings</div>
        </div>
    )

}
