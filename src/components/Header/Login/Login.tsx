import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {initialStateType, setAuth} from "../../../redux/auth-reducer";
import {Redirect, Route} from "react-router-dom";
import {AppRootStateType} from "../../../redux/redux-store";
import {authMe} from "../../../API/API";

export const Login = () => {

    const dispatch = useDispatch()
    const state = useSelector<AppRootStateType, initialStateType>(state => state.auth)

    useEffect(() => {

        authMe()
            .then(res => {
                if (res.data.resultCode === 0) {
                    const {id, email, login, messages} = res.data.data
                    dispatch(setAuth(id, email, login, messages))
                }
            })

    }, [])


    return (
        <div>
            <Route exact path='/login' render={() => <Redirect to='/' />}></Route>
        </div>
    )

}

