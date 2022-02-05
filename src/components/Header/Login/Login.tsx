import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {initialStateType, setAuthTC} from "../../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {AppRootStateType} from "../../../redux/redux-store";
import css from './Login.module.css'

export const Login = () => {


    const state = useSelector<AppRootStateType, initialStateType>(state => state.auth)
    const dispatch = useDispatch()


    const onClickHandler = () => {
        dispatch(setAuthTC())
    }


    if (state.isAuth) {
        return <Redirect to='/' />
    }

    return (
        <div>
            {state.isAuth
                ? <span>Hello, {state.login}! Your ID is {state.id}</span>

                : <div className={css.login_box} onClick={onClickHandler}>
                    Login
                </div>
            }
        </div>
    )

}

