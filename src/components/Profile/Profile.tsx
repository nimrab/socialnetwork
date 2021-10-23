import React from 'react';
import css from './Profile.module.css';
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

export const Profile = () => {

    return (
        <div className={css.profile}>

            <ProfileInfo/>
            <MyPosts/>

        </div>
    )

}
