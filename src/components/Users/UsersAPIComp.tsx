import React, {useEffect} from 'react';
import {Users} from "./Users";
import {UsersPropsType} from "./UsersContainer";
import axios from "axios";
import {Preloader} from "../common/Preloader/Preloader";


export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "21183"
    }
});


export const UsersAPIComp = (props: UsersPropsType) => {

    useEffect(() => {

        if (props.usersPage.users.length === 0) {

            props.isFetching(true)

            instance.get(`https://social-network.samuraijs.com/api/1.0/users?page=${props.usersPage.currentPage}&count=${props.usersPage.pageSize}`).then(response => {
                props.isFetching(false)
                props.addMoreUsers(response.data.items)
                //!!!check & revise count
                props.setTotalUsersCount(response.data.totalCount / 400)
            })
        }

    },[])


    const pageClickHandler = (page: number) => {
        props.isFetching(true)
        props.selectPage(page)
        instance.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${props.usersPage.pageSize}`).then(response => {
            props.isFetching(false)
            props.addMoreUsers(response.data.items)
        })
    }

    const pagesCount = Math.ceil(props.usersPage.totalUsersCount / props.usersPage.pageSize)
    let pagesArr = []

    for (let i = 1; i <= pagesCount; i++) {
        pagesArr.push(i)
    }


    return (
        <>
            {props.usersPage.isFetching ? <Preloader/> : null}
            <Users
                pageClickHandler={pageClickHandler}
                pagesArr={pagesArr}
                followUser={props.followUser}
                unfollowUser={props.unfollowUser}
                usersPage={props.usersPage}
            />

        </>
    );
};

