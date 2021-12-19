import React, {useEffect} from 'react';
import css from './Users.module.css'
import {UsersPropsType} from "./UsersContainer";
import axios from 'axios'
import userDefaultPhoto from '../../assets/userDefault.png'

export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "21183"
    }
});

export const Users = (props: UsersPropsType) => {

    useEffect(() => {

        if (props.usersPage.users.length === 0) {

            instance.get(`https://social-network.samuraijs.com/api/1.0/users?page=${props.usersPage.currentPage}&count=${props.usersPage.pageSize}`).then(response => {
                props.addMoreUsers(response.data.items)
                //!!!check & revise count
                props.setTotalUsersCount(response.data.totalCount / 400)
            })
        }

    })

const pageClickHandler = (page: number) => {
    props.selectPage(page)
    instance.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${props.usersPage.pageSize}`).then(response => {
        props.addMoreUsers(response.data.items)
    })

}


    const pagesCount = Math.ceil(props.usersPage.totalUsersCount / props.usersPage.pageSize)
    let pagesArr = []

    for (let i = 1; i <= pagesCount; i++) {
        pagesArr.push(i)
    }

    const pageToComp = pagesArr.map(el => {
        let current = props.usersPage.currentPage === el
        return (

            <span
                key={el}
                className={`${css.page_number} ${current && css.selected_page}`}
                onClick={() => pageClickHandler(el)}
                >
                {el}
            </span>
        )
    })

    const clickHandler = (id: string, followed: boolean) => {
        followed ? props.unfollowUser(id) : props.followUser(id)
    }

    const usersDataToComp = props.usersPage.users.map(el => {
        return (

            <section className={css.user_box} key={el.id}>

                <div>
                    <img
                        src={el.photos.small !== null ? el.photos.small : userDefaultPhoto}
                        alt='user photo'
                        className={css.img}
                    />
                    <div
                        className={css.follow_btn}
                        onClick={() => clickHandler(el.id, el.followed)}
                    >
                        {el.followed ? 'Unfollow' : 'Follow'}
                    </div>
                </div>

                <div className={css.user_info_box}>

                    <div className={css.user_name}>
                        <h5>Name:{el.name}</h5>
                        <h6>Status: {el.status}</h6>
                    </div>


                    <div className={css.user_location}>
                        <h5>Country: {'el.location.country'}</h5>
                        <h6>City: {'el.location.city'}</h6>
                    </div>

                </div>

            </section>
        )


    })


    return (
        <>
            {pageToComp}
            {usersDataToComp}
        </>
    );
};

