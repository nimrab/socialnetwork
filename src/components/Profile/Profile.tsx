import React from 'react';
import css from './Profile.module.css';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPosts} from "./MyPosts/MyPosts";
import {addPostActionType, ProfilePageType, updateNewPostTextActionType} from "../../redux/state";


export type ProfileProps = {
    stateProfilePage: ProfilePageType
    dispatch:(action: addPostActionType | updateNewPostTextActionType) => void
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
