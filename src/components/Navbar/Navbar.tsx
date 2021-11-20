import React from 'react';
import css from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import {Sidebar} from "./Sidebar/Sidebar";
import {SidebarType} from "../../redux/store";

export type NavbarProps = {
    state: SidebarType
}

export const Navbar = (props:NavbarProps) => {

    return (
        <div className={css.navbar}>
            <div className={css.nav_button}><NavLink to="/profile" activeClassName={css.active}>Profile</NavLink></div>
            <div className={css.nav_button}><NavLink to="/dialogs" activeClassName={css.active}>Messages</NavLink></div>
            <div className={css.nav_button}>News</div>
            <div className={css.nav_button}>Music</div>
            <div className={css.nav_button}>Settings</div>
            <Sidebar friends={props.state.friends}/>
        </div>


    )

}
