import React from 'react';
import css from './Header.module.css';
import {NavLink} from 'react-router-dom';
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {initialStateType} from "../../redux/auth-reducer";


export const Header = () => {

    const state = useSelector<AppRootStateType, initialStateType>(state => state.auth)


    return (
        <div className={css.header}>
            {state.isAuth
                ? <span>Hello, {state.login}! Your ID is {state.id}</span>

                : <div className={css.login_box}>
                    <NavLink to={'login'}>Login</NavLink>
                </div>
            }
        </div>
    )

}
