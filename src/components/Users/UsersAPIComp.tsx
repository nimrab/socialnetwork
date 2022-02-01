import React, {useEffect} from 'react';
import {Users} from "./Users";
import {UsersPropsType} from "./UsersContainer";
import {Preloader} from "../common/Preloader/Preloader";
import {getUsers} from "../../API/API";


export const UsersAPIComp = (props: UsersPropsType) => {

    useEffect(() => {

        if (props.usersPage.users.length === 0) {

            props.isFetching(true)

            getUsers(props.usersPage.currentPage, props.usersPage.pageSize).then(response => {
                props.addMoreUsers(response.data.items)
                //!!!check & revise pages count
                props.setTotalUsersCount(response.data.totalCount / 400)
                props.isFetching(false)
            })
        }
    }, [])


    const pageClickHandler = (page: number) => {
        props.isFetching(true)
        props.selectPage(page)
        getUsers(page, props.usersPage.pageSize).then(response => {
            props.addMoreUsers(response.data.items)
            props.isFetching(false)
        })
    }

    const pagesCount = Math.ceil(props.usersPage.totalUsersCount / props.usersPage.pageSize)
    let pagesArr = []

    for (let i = 1; i <= pagesCount; i++) {
        pagesArr.push(i)
    }

    return (
        <>
            {props.usersPage.isFetching ? <Preloader/> :
                <Users
                    pageClickHandler={pageClickHandler}
                    pagesArr={pagesArr}
                    followUser={props.followUser}
                    unfollowUser={props.unfollowUser}
                    usersPage={props.usersPage}
                    isFetching={props.isFetching}
                />
            }
        </>
    );
};

