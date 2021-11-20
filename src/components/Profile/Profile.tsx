import React from 'react';
import css from './Profile.module.css';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPosts} from "./MyPosts/MyPosts";
import {ActionTypes, ProfilePageType} from "../../redux/store";


export type ProfileProps = {
    stateProfilePage: ProfilePageType
    dispatch:(action:ActionTypes) => void
    //addPost: (post: string) => void
    //updateNewPostText: (newText:string) => void
}

export const Profile = (props: ProfileProps) => {
    return (
        <div className={css.profile}>

            <ProfileInfo/>
            <MyPosts
                stateProfilePage={props.stateProfilePage}
                dispatch={props.dispatch}
            />

        </div>
    )

}
