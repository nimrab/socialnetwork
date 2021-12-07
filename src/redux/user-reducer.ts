import {v1} from "uuid";
import {UsersType} from "./store";


const ADD_USER = 'ADD-USER'
const DELETE_USER = 'DELETE-USER'
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


type profileReducerType = FollowACType | UnfollowACType | AddUserACType

export const profileReducer = (state: InitialStateType = initialState, action: profileReducerType): InitialStateType => {

    switch (action.type) {

        case ADD_USER:
            const newUser = {
                id: v1(),
                followed: false,
                name: action.name,
                status: '',
                location: {city: action.city, country: action.country}
            }

            return {...state, users: [...state.users, newUser]}


        case FOLLOW_USER:
            return {...state, users: state.users.map(el => el.id === action.userId ? {...el, followed: true} : el)}

        case UNFOLLOW_USER:
            return {...state, users: state.users.map(el => el.id === action.userId ? {...el, followed: false} : el)}

        default:
            return state
    }
}


type FollowACType = ReturnType<typeof followAC>

export const followAC = (userId: string) => {
    return {
        type: FOLLOW_USER,
        userId
    } as const
}

type UnfollowACType = ReturnType<typeof unfollowAC>

export const unfollowAC = (userId: string) => {
    return {
        type: UNFOLLOW_USER,
        userId
    } as const
}

type AddUserACType = ReturnType<typeof addUserAC>

export const addUserAC = (userId: string, name: string, city: string, country: string) => {
    return {
        type: ADD_USER,
        userId,
        name,
        city,
        country
    } as const
}

