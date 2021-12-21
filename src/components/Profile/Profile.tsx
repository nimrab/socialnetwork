import React, {useEffect} from 'react';
import css from './Profile.module.css';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {useDispatch, useSelector} from "react-redux";
import {UserProfileType} from "../../redux/store";
import {AppRootStateType} from "../../redux/redux-store";
import {instance} from "../Users/UsersAPIComp";
import {setUserProfileInfo} from "../../redux/profile-reducer";
import {RouteComponentProps} from "react-router-dom";

type PathParamsType = {
    userId:string
}

type ProfilePropsType = RouteComponentProps<PathParamsType>

export const Profile = (props: ProfilePropsType) => {

    const dispatch = useDispatch()
    const profileState = useSelector<AppRootStateType, UserProfileType | null>(state => state.profilePage.profile)

    useEffect(() => {
        const userId = props.match.params.userId
        instance.get(`profile/` + userId).then(response => {
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

