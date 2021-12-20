import React from 'react';
import css from './Users.module.css'
import userDefaultPhoto from '../../assets/userDefault.png'
import {UsersPageType} from "../../redux/store";

type UserType = {
    pageClickHandler: (page: number) => void
    pagesArr: Array<number>
    usersPage: UsersPageType
    followUser: (id:string) => void
    unfollowUser: (id:string) => void
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

