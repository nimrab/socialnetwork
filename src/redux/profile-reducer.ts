import {ProfilePageType, UserProfileType} from "./store";
import {addMessageActionCreator, updateMessageTextActionCreator} from "./dialog-reducer";
import {toggleIsFetchingAC} from "./user-reducer";

const ADD_POST = 'ADD-POST'
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT'
const SET_USER_PROFILE_INFO = 'SET-USER-PROFILE-INFO'
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'


export type ActionTypes =
    (
        ReturnType<typeof addPostActionCreator> |
        ReturnType<typeof updateNewPostTextActionCreator> |
        ReturnType<typeof addMessageActionCreator> |
        ReturnType<typeof updateMessageTextActionCreator> |
        ReturnType<typeof setUserProfileInfo> |
        ReturnType<typeof toggleIsFetchingAC>
        )


const initialState: ProfilePageType = {
    profile: {
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
    isFetching: true
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
