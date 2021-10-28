import React from 'react';
import css from './Profile.module.css';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPosts} from "./MyPosts/MyPosts";
import {MesPropType} from "../../index";

export const Profile = (props: {mesData: Array<MesPropType>}) => {

    return (
        <div className={css.profile}>

            <ProfileInfo/>
            <MyPosts mesData={props.mesData}/>

        </div>
    )

}
