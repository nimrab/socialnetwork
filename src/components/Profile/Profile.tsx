import React from 'react';
import css from './Profile.module.css';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";



export const Profile = () => {
    return (
        <div className={css.profile}>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    )
}

