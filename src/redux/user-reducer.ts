import {v1} from "uuid";
import {UsersType} from "./store";


const ADD_MORE_USERS = 'ADD-MORE-USERS'
const FOLLOW_USER = 'FOLLOW-USER'
const UNFOLLOW_USER = 'UNFOLLOW-USER'

type InitialStateType = {
    users: Array<UsersType>
}

const initialState: any = {
    users: [
        {
            id: v1(),
            followed: true,
            name: 'MyFriend1',
            status: 'looking for a job',
            location: {city: 'SPB', country: 'Russia'}
        },
        {
            id: v1(),
            followed: false,
            name: 'MyFriend2',
            status: 'do nothing club',
            location: {city: 'SPB', country: 'Russia'}
        },
        {id: v1(), followed: true, name: 'MyFriend3', status: 'hey', location: {city: 'SPB', country: 'Russia'}},
        {id: v1(), followed: false, name: 'MyFriend4', status: 'Oo', location: {city: 'SPB', country: 'Russia'}}
    ],
}


type profileReducerType = FollowUserACType | UnfollowUserACType | addMoreUsersACType

export const profileReducer = (state: InitialStateType = initialState, action: profileReducerType): InitialStateType => {

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

