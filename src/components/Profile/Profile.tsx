import React, {useEffect} from 'react';
import css from './Profile.module.css';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {useDispatch, useSelector} from "react-redux";
import {ProfilePageType, UserProfileType} from "../../redux/store";
import {AppRootStateType} from "../../redux/redux-store";
import {instance} from "../Users/UsersAPIComp";
import {setUserProfileInfo} from "../../redux/profile-reducer";
import {RouteComponentProps} from "react-router-dom";
import {toggleIsFetchingAC} from "../../redux/user-reducer";
import {Preloader} from "../common/Preloader/Preloader";

type PathParamsType = {
    userId:string
}

type ProfilePropsType = RouteComponentProps<PathParamsType>

// export const Profile = (props: ProfilePropsType) => {
export const Profile = () => {
    console.log('working!')

    const dispatch = useDispatch()
    // const profileState = useSelector<AppRootStateType, UserProfileType | null>(state => state.profilePage.profile)
    // const profileIsFetching = useSelector<AppRootStateType, boolean>(state => state.profilePage.isFetching)

    const profileState = useSelector<AppRootStateType, ProfilePageType>(state => state.profilePage)

    console.log(profileState)

    // console.log(props.match.params.userId)
    //
        useEffect(() => {
            const userId = 3
            // const userId = props.match.params.userId
            instance.get(`profile/` + userId).then(response => {
                dispatch(setUserProfileInfo(response.data))
                dispatch(toggleIsFetchingAC(false))
            })
        }, [])

    return (
        <>
            {profileState.isFetching ? <Preloader/> : null}
            <div>
                <ProfileInfo profile={profileState.profile}/>
            </div>

        </>
        // <div className={css.profile}>
        //     WORKING
        //     {/*<ProfileInfo profile={profileState}/>*/}
        //     {/*<MyPostsContainer/>*/}
        // </div>
    )
}

