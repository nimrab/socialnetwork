import React from 'react';
import css from './Users.module.css'
import userDefaultPhoto from '../../assets/images/userDefault.png'
import {UsersPageType} from "../../redux/store";
import {NavLink} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {followUserTC, unFollowUserTC} from "../../redux/user-reducer";

type UserType = {
    pageClickHandler: (page: number) => void
    pagesArr: Array<number>
}

export const Users = (props: UserType) => {

    const state = useSelector<AppRootStateType, UsersPageType>(state => state.usersPage)
    const dispatch = useDispatch()

    const pageToComp = props.pagesArr.map(el => {
        let current = state.currentPage === el
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

    const followBtnHandler = (userId: number, followed: boolean) => {
        if (followed) {
            dispatch(unFollowUserTC(userId))
        }
        if (!followed) {
            dispatch(followUserTC(userId))
        }
    }
    const usersDataToComp = state.users.map(el => {
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
                    <button
                        className={css.follow_btn}
                        onClick={() => followBtnHandler(el.id, el.followed)}
                        disabled={state.followRequestInProcess.some(elem => elem === el.id)}
                    >
                        {el.followed ? 'Unfollow' : 'Follow'}
                    </button>
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

