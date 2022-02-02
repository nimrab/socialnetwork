import React, {useEffect} from 'react';
import {Users} from "./Users";
import {UsersPropsType} from "./UsersContainer";
import {Preloader} from "../common/Preloader/Preloader";
import {getUsers} from "../../API/API";
import {useDispatch, useSelector} from "react-redux";
import {toggleIsFetchingAC} from "../../redux/user-reducer";
import {AppRootStateType} from "../../redux/redux-store";
import {UsersPageType} from "../../redux/store";


export const UsersAPIComp = (props: UsersPropsType) => {

    const state = useSelector<AppRootStateType, UsersPageType>(state => state.usersPage)
    const isFetching = useSelector<AppRootStateType, boolean>(state => state.usersPage.isFetching)
    const dispatch = useDispatch()

    useEffect(() => {


        if (props.usersPage.users.length === 0) {
            dispatch(toggleIsFetchingAC(true))

            getUsers(props.usersPage.currentPage, props.usersPage.pageSize).then(response => {
                props.addMoreUsers(response.data.items)
                //!!!check & revise pages count hardcode
                props.setTotalUsersCount(response.data.totalCount / 400)

                dispatch(toggleIsFetchingAC(false))
            })
        }
    }, [])


    const pageClickHandler = (page: number) => {
        dispatch(toggleIsFetchingAC(true))
        console.log('After dispatch (page) - ' + state.isFetching)
        props.selectPage(page)
        getUsers(page, props.usersPage.pageSize).then(response => {
            props.addMoreUsers(response.data.items)
            dispatch(toggleIsFetchingAC(false))
        })
    }

    const pagesCount = Math.ceil(props.usersPage.totalUsersCount / props.usersPage.pageSize)
    let pagesArr = []

    for (let i = 1; i <= pagesCount; i++) {
        pagesArr.push(i)
    }

    return (
        <>
            { isFetching
                ? <Preloader/>
                : <Users
                    pageClickHandler={pageClickHandler}
                    pagesArr={pagesArr}
                    followUser={props.followUser}
                    unfollowUser={props.unfollowUser}
                    usersPage={props.usersPage}
                />
            }


        </>
    );
};

