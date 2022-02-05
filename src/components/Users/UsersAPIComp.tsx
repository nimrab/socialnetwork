import React, {useEffect} from 'react';
import {Users} from "./Users";
import {UsersPropsType} from "./UsersContainer";
import {Preloader} from "../common/Preloader/Preloader";
import {useDispatch, useSelector} from "react-redux";
import {getUsersTC, userPagesTC} from "../../redux/user-reducer";
import {AppRootStateType} from "../../redux/redux-store";
import {UsersPageType} from "../../redux/store";
import {Redirect} from "react-router-dom";


export const UsersAPIComp = (props: UsersPropsType) => {

    const state = useSelector<AppRootStateType, UsersPageType>(state => state.usersPage)
    const isAuth = useSelector<AppRootStateType, boolean>(state => state.auth.isAuth)
    const dispatch = useDispatch()

    useEffect(() => {
        if (state.users.length === 0) {
            dispatch(getUsersTC(state.currentPage, state.pageSize));

        }
    }, [])


    const pageClickHandler = (page: number) => {
        dispatch(userPagesTC(page, state.pageSize))
    }

    const pagesCount = Math.ceil(state.totalUsersCount / state.pageSize)
    let pagesArr = []

    for (let i = 1; i <= pagesCount; i++) {
        pagesArr.push(i)
    }

    if (!isAuth) {
        return <Redirect to='/login'/>
    }

    return (
        <>
            {state.isFetching
                ? <Preloader/>
                : <Users
                    pageClickHandler={pageClickHandler}
                    pagesArr={pagesArr}
                />
            }
        </>
    );
};

