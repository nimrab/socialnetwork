import React from 'react';
import css from './Header.module.css';
import {Login} from "./Login/Login";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {initialStateType} from "../../redux/auth-reducer";


export const Header = () => {
    const state = useSelector<AppRootStateType, initialStateType>(state => state.auth)

    return (
        <div className={css.header}>
            {state.isAuth
                ? <span>Hello, {state.login}! Your ID is {state.id}</span>
                : <Login/>
            }

        </div>
    )

}
