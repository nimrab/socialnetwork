import React, {useEffect} from 'react';
import {instance} from "../../Users/UsersAPIComp";
import {useDispatch, useSelector} from "react-redux";
import {initialStateType, setAuth} from "../../../redux/auth-reducer";
import {Redirect, Route} from "react-router-dom";
import {AppRootStateType} from "../../../redux/redux-store";
import {DialogsContainer} from "../../Dialogs/DialogsContainer";

export const Login = () => {

    const dispatch = useDispatch()
    const state = useSelector<AppRootStateType, initialStateType>(state => state.auth)

    useEffect(() => {

        instance.get(`auth/me`)
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

