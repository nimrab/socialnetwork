import React, {useEffect} from 'react';
import css from './Profile.module.css';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {useDispatch, useSelector} from "react-redux";
import {ProfilePageType} from "../../redux/store";
import {AppRootStateType} from "../../redux/redux-store";
import {setProfileTC} from "../../redux/profile-reducer";
import {Redirect, RouteComponentProps} from "react-router-dom";
import {Preloader} from "../common/Preloader/Preloader";
import {Login} from "../Header/Login/Login";

type PathParamsType = {
    userId: string
}

type ProfilePropsType = RouteComponentProps<PathParamsType>

export const Profile = (props: ProfilePropsType) => {

    const dispatch = useDispatch()
    const profileState = useSelector<AppRootStateType, ProfilePageType>(state => state.profilePage)
    const isAuth = useSelector<AppRootStateType, boolean>(state => state.auth.isAuth)
    const authId = useSelector<AppRootStateType, number | null>(state => state.auth.id)
    const userId = +props.match.params.userId

    useEffect(() => {
        //const userId = +props.match.params.userId ?? 2

        if (userId) {
            dispatch(setProfileTC(userId))
        }

    }, [])


    if (!isAuth) {
       // return <Redirect to='/login'/>
        return <Login/>
    }

    if (!props.match.params.userId) {
        return <Redirect to={`/profile/${authId}`}/>
    }



    return (
        <>
            {profileState.isFetching
                ? <Preloader/>
                :
                <div className={css.profile}>
                    <ProfileInfo
                        profile={profileState.profile}
                    />
                    <MyPostsContainer/>
                </div>}


        </>
    )
}

