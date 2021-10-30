import React from 'react';
import css from './Profile.module.css';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPosts} from "./MyPosts/MyPosts";
import {MesPropType} from "../../index";


export type ProfileProps = {
    mesData: Array<MesPropType>
    addPost: (post:string) => void
}

export const Profile = (props: ProfileProps) => {

    return (
        <div className={css.profile}>

            <ProfileInfo/>
            <MyPosts mesData={props.mesData} addPost={props.addPost}/>

        </div>
    )

}
