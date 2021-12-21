import React, {useEffect} from 'react';
import css from './Profile.module.css';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {useDispatch, useSelector} from "react-redux";
import {UserProfileType} from "../../redux/store";
import {AppRootStateType} from "../../redux/redux-store";
import {instance} from "../Users/UsersAPIComp";
import {setUserProfileInfo} from "../../redux/profile-reducer";


export const Profile = () => {

    const dispatch = useDispatch()
    const profileState = useSelector<AppRootStateType, UserProfileType | null>(state => state.profilePage.profile)

    useEffect(() => {
        instance.get(`profile/2`).then(response => {
             dispatch(setUserProfileInfo(response.data))
        })
    }, [])

    return (
        <div className={css.profile}>
            <ProfileInfo profile={profileState}/>
            <MyPostsContainer/>
        </div>
    )
}

