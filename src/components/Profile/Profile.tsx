import React, {useEffect} from 'react';
import css from './Profile.module.css';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {useDispatch, useSelector} from "react-redux";
import {ProfilePageType} from "../../redux/store";
import {AppRootStateType} from "../../redux/redux-store";
import {setProfileTC} from "../../redux/profile-reducer";
import {RouteComponentProps} from "react-router-dom";
import {Preloader} from "../common/Preloader/Preloader";

type PathParamsType = {
    userId: string
}

type ProfilePropsType = RouteComponentProps<PathParamsType>

export const Profile = (props: ProfilePropsType) => {

    const dispatch = useDispatch()
    const profileState = useSelector<AppRootStateType, ProfilePageType>(state => state.profilePage)


    useEffect(() => {
        //check for hardcode number 2..

            //const userId = +props.match.params.userId ?? 2
            const userId = props.match.params.userId === undefined ? 2 : +props.match.params.userId
            console.log(props.match.params.userId)
            dispatch(setProfileTC(userId))

    }, [])


    return (
        <>
            {profileState.isFetching
                ? <Preloader/>
                :
                <div className={css.profile}>
                    <ProfileInfo profile={profileState.profile}/>
                    <MyPostsContainer/>
                </div>}


        </>
    )
}

