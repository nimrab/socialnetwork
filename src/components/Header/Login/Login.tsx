import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {initialStateType, setAuth, setAuthTC} from "../../../redux/auth-reducer";
import {Redirect, Route} from "react-router-dom";
import {AppRootStateType} from "../../../redux/redux-store";
import {authMe} from "../../../API/API";

export const Login = () => {


    const dispatch = useDispatch()

    useEffect(() => {

        dispatch(setAuthTC())

    }, [])


    return (
        <div>
            <Route exact path='/login' render={() => <Redirect to='/' />}></Route>
        </div>
    )

}

