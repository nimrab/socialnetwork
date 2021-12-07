import React from 'react';
import css from './Users.module.css'
import {UsersPropsType} from "./UsersContainer";


export const Users = (props: UsersPropsType) => {


    const clickHandler = (id: string, followed: boolean) => {

        followed ? props.unfollowUser(id) : props.followUser(id)

    }

    const usersDataToComp = props.usersPage.users.map(el => {
        return (

            <section className={css.user_box} key={el.id}>

                <div>
                    <img
                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO73buurUzfAHJJqUcL0cP2v_Q4UYpjWS1_g&usqp=CAU'
                        alt='friend_img'
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
                        <h5>Country: {el.location.country}</h5>
                        <h6>City: {el.location.city}</h6>
                    </div>

                </div>

            </section>
        )


    })


    return (
      <>{usersDataToComp}</>
    );
};

