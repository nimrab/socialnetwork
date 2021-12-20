import React, {useEffect} from 'react';
import css from './Profile.module.css';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {useDispatch, useSelector} from "react-redux";
import {ProfilePageType, UserProfileType} from "../../redux/store";
import {AppRootStateType} from "../../redux/redux-store";
import {instance} from "../Users/UsersAPIComp";
import {setUserProfileInfo} from "../../redux/profile-reducer";


export const Profile = () => {

    const dispatch = useDispatch()
    const profileState = useSelector<AppRootStateType, UserProfileType | null>(state => state.profilePage.profile)

    useEffect(() => {
        instance.get(`https://social-network.samuraijs.com/api/1.0/profile/3`).then(response => {
             dispatch(setUserProfileInfo(response.data))
        })
    }, [])

    console.log('profile' + profileState)

    return (
        <div className={css.profile}>
            <ProfileInfo profile={profileState}/>
            <MyPostsContainer/>
        </div>
    )
}

