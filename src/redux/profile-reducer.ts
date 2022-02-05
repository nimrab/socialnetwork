import {ProfilePageType, UserProfileType} from "./store";
import {addMessageActionCreator, updateMessageTextActionCreator} from "./dialog-reducer";
import {toggleIsFetchingAC} from "./user-reducer";
import {Dispatch} from "redux";
import {getProfileStatus, getUserProfile, updateProfileStatus} from "../API/API";

const ADD_POST = 'ADD-POST'
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT'
const SET_USER_PROFILE_INFO = 'SET-USER-PROFILE-INFO'
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'
const SET_PROFILE_STATUS = 'SET-PROFILE-STATUS'


export type ActionTypes =
    (
        ReturnType<typeof addPostActionCreator> |
        ReturnType<typeof updateNewPostTextActionCreator> |
        ReturnType<typeof addMessageActionCreator> |
        ReturnType<typeof updateMessageTextActionCreator> |
        ReturnType<typeof setUserProfileInfo> |
        ReturnType<typeof toggleIsFetchingAC> |
        ReturnType<typeof setProfileStatus>
        )


const initialState = {
    profile: {
        status: 'Set your status here...',
        aboutMe: null,
        userId: null,
        lookingForAJob: null,
        lookingForAJobDescription: null,
        fullName: null,
        contacts: {
            github: null,
            vk: null,
            facebook: null,
            instagram: null,
            twitter: null,
            website: null,
            youtube: null,
            mainLink: null,
        },
        photos: {
            small: null,
            large: null,
        }
    },
    posts: [
        {mes: "hello bro", likes: 300},
        {mes: "hello bro1", likes: 330},
        {mes: "hello bro2", likes: 110}
    ],
    newPostText: '',
    isFetching: false
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionTypes): ProfilePageType => {

    switch (action.type) {

        case ADD_POST:
            const newPost = {
                mes: state.newPostText,
                likes: 0
            }
            return {...state, posts: [...state.posts, newPost], newPostText: ''}

        case UPDATE_POST_TEXT:
            return {...state, newPostText: action.newText}

        case SET_USER_PROFILE_INFO:
            return {...state, profile: action.userInfoObj}

        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.value}

        case SET_PROFILE_STATUS:
            return {...state, profile: {...state.profile, status: action.status}}

        default:
            return state
    }
}


export const addPostActionCreator = () => {
    return {
        type: ADD_POST,
    } as const
}


export const updateNewPostTextActionCreator = (newText: string) => {
    return {
        type: UPDATE_POST_TEXT,
        newText: newText
    } as const
}


export const setUserProfileInfo = (userInfoObj: UserProfileType) => {
    return {
        type: SET_USER_PROFILE_INFO,
        userInfoObj
    } as const
}


export const setProfileStatus = (status: string) => {
    return {
        type: SET_PROFILE_STATUS,
        status
    } as const
}

//...................................................................
//Thunk Creators


export const setProfileTC = (userId: number) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleIsFetchingAC(true))
        getUserProfile(userId).then(response => {
            dispatch(setUserProfileInfo(response.data))
            dispatch(toggleIsFetchingAC(false))
        })
    }
}

export const getProfileStatusTC = (userId: number) => {
    return (dispatch: Dispatch) => {
        getProfileStatus(userId)
            .then(res => {
                if (res.data !== null) {
                    dispatch(setProfileStatus(res.data))
                } else {
                    dispatch(setProfileStatus('user status is empty'))
                }
            })
    }
}

export const setProfileStatusTC = (status: string) => {
    return (dispatch: Dispatch) => {
        updateProfileStatus(status)
            .then((res) => {
                if (res.data.resultCode === 0) {
                    dispatch(setProfileStatus(status))
                }
            })
    }
}