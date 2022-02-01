import React, {useEffect} from 'react';
import css from './Profile.module.css';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {useDispatch, useSelector} from "react-redux";
import {ProfilePageType} from "../../redux/store";
import {AppRootStateType} from "../../redux/redux-store";
import {setUserProfileInfo} from "../../redux/profile-reducer";
import {RouteComponentProps} from "react-router-dom";
import {toggleIsFetchingAC} from "../../redux/user-reducer";
import {Preloader} from "../common/Preloader/Preloader";
import {getUserProfile} from "../../API/API";

type PathParamsType = {
    userId: string
}

type ProfilePropsType = RouteComponentProps<PathParamsType>

export const Profile = (props: ProfilePropsType) => {

    const dispatch = useDispatch()
    const profileState = useSelector<AppRootStateType, ProfilePageType>(state => state.profilePage)


    useEffect(() => {
        //check for hardcode number 2..

            const userId = +props.match.params.userId ?? 2
            getUserProfile(userId).then(response => {
                console.log(response.data)
                dispatch(setUserProfileInfo(response.data))
                dispatch(toggleIsFetchingAC(false))
            })
    }, [])


    return (
        <>
            {profileState.isFetching
                ? <Preloader/>
                :
                <div className={css.profile}>
                    <ProfileInfo profile={profileState.profile}/>
                    <MyPostsContainer/>
                </div>
            }


        </>
    )
}

