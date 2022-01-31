import React from 'react';
import css from './Users.module.css'
import userDefaultPhoto from '../../assets/images/userDefault.png'
import {UsersPageType} from "../../redux/store";
import {NavLink} from 'react-router-dom';
import {instance} from "./UsersAPIComp";

type UserType = {
    pageClickHandler: (page: number) => void
    pagesArr: Array<number>
    usersPage: UsersPageType
    followUser: (id: string) => void
    unfollowUser: (id: string) => void
    isFetching: (value: boolean) => void
}


export const Users = (props: UserType) => {


    const pageToComp = props.pagesArr.map(el => {
        let current = props.usersPage.currentPage === el
        return (
            <span
                key={el}
                className={`${css.page_number} ${current && css.selected_page}`}
                onClick={() => props.pageClickHandler(el)}
            >
                {el}
             </span>
        )
    })

    const followBtnHandler = (id: string, followed: boolean) => {
        if (followed) {
            props.isFetching(true)
            instance.delete(`/follow/${id}`)
                .then(response => {
                    if (response.data.resultCode === 0) {
                        props.unfollowUser(id)
                    }
                    props.isFetching(false)
                })

        }
        if (!followed) {
            props.isFetching(true)
            instance.post(`/follow/${id}`)
                .then(response => {
                    if (response.data.resultCode === 0) {
                        props.followUser(id)
                    }
                    props.isFetching(false)
                })
        }
    }
    const usersDataToComp = props.usersPage.users.map(el => {
        return (

            <section className={css.user_box} key={el.id}>

                <div>
                    <NavLink to={'profile/' + el.id}>
                        <img
                            src={el.photos.small !== null ? el.photos.small : userDefaultPhoto}
                            alt='user photo'
                            className={css.img}
                        />
                    </NavLink>
                    <div
                        className={css.follow_btn}
                        onClick={() => followBtnHandler(el.id, el.followed)}
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
                        <h5>Country: {'location.country(hard string)'}</h5>
                        <h6>City: {'location.city(hard string)'}</h6>
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

