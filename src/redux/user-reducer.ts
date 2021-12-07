import {v1} from "uuid";
import {UsersType} from "./store";


const ADD_MORE_USERS = 'ADD-MORE-USERS'
const FOLLOW_USER = 'FOLLOW-USER'
const UNFOLLOW_USER = 'UNFOLLOW-USER'

type InitialStateType = {
    users: Array<UsersType>
}

type profileReducerType = FollowUserACType | UnfollowUserACType | addMoreUsersACType


const initialState: any = {
    users: [],
}


export const userReducer = (state: InitialStateType = initialState, action: profileReducerType): InitialStateType => {

    switch (action.type) {

        case ADD_MORE_USERS:

            return {...state, users: [...state.users, ...action.users]}


        case FOLLOW_USER:
            return {...state, users: state.users.map(el => el.id === action.userId ? {...el, followed: true} : el)}

        case UNFOLLOW_USER:
            return {...state, users: state.users.map(el => el.id === action.userId ? {...el, followed: false} : el)}

        default:
            return state
    }
}


type FollowUserACType = ReturnType<typeof followUserAC>

export const followUserAC = (userId: string) => {
    return {
        type: FOLLOW_USER,
        userId
    } as const
}

type UnfollowUserACType = ReturnType<typeof unfollowUserAC>

export const unfollowUserAC = (userId: string) => {
    return {
        type: UNFOLLOW_USER,
        userId
    } as const
}

type addMoreUsersACType = ReturnType<typeof addMoreUsersAC>

export const addMoreUsersAC = (users: Array<UsersType>) => {
    return {
        type: ADD_MORE_USERS,
        users
    } as const
}

