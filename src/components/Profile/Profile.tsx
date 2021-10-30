import React from 'react';
import css from './Profile.module.css';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPosts} from "./MyPosts/MyPosts";
import {profilePageType} from "../../redux/state";


export type ProfileProps = {
    state: profilePageType
    addPost: (post:string) => void
}

export const Profile = (props: ProfileProps) => {

    return (
        <div className={css.profile}>

            <ProfileInfo/>
            <MyPosts posts={props.state.posts} addPost={props.addPost}/>

        </div>
    )

}
