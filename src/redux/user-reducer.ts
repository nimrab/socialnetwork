import {UsersType} from "./store";


const ADD_MORE_USERS = 'ADD-MORE-USERS'
const FOLLOW_USER = 'FOLLOW-USER'
const UNFOLLOW_USER = 'UNFOLLOW-USER'
const CHANGE_USER_PAGE_NUMBER = 'CHANGE-USER-PAGE-NUMBER'
const SET_USERS_COUNT = 'SET-USERS-COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'
const TOGGLE_FOLLOW_REQUEST = 'TOGGLE-FOLLOW-REQUEST'
const TOGGLE_IS_FOLLOW_FETCHING = 'TOGGLE-IS-FOLLOW-FETCHING'

type InitialStateType = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    isFollowFetching: boolean
    followRequestInProcess: Array<number>
}

type profileReducerType =
    FollowUserACType |
    UnfollowUserACType |
    addMoreUsersACType |
    changeUserPageNumberType |
    setTotalUsersCountType |
    toggleIsFetchingType |
    toggleFollowRequestInProcessType |
    toggleIsFollowFetchingType


const initialState: any = {
    users: [],
    pageSize: 7,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    isFollowFetching: false,
    followRequestInProcess: []
}


export const userReducer = (state: InitialStateType = initialState, action: profileReducerType): InitialStateType => {

    switch (action.type) {

        case ADD_MORE_USERS:
            return {...state, users: [...action.users]}

        case FOLLOW_USER:
            return {...state, users: state.users.map(el => el.id === action.userId ? {...el, followed: true} : el)}

        case UNFOLLOW_USER:
            return {...state, users: state.users.map(el => el.id === action.userId ? {...el, followed: false} : el)}

        case CHANGE_USER_PAGE_NUMBER:
            return {...state, currentPage: action.page}

        case SET_USERS_COUNT:
            return {...state, totalUsersCount: action.count}

        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.value}

        case TOGGLE_IS_FOLLOW_FETCHING:
            return {...state, isFollowFetching: action.value}

        case TOGGLE_FOLLOW_REQUEST:
            return state.isFollowFetching
            ? {...state, followRequestInProcess: [...state.followRequestInProcess, action.userId]}
            : {...state, followRequestInProcess: state.followRequestInProcess.filter(el => el !== action.userId)}

        default:
            return state
    }
}


type FollowUserACType = ReturnType<typeof followUserAC>

export const followUserAC = (userId: number) => {
    return {
        type: FOLLOW_USER,
        userId
    } as const
}

type UnfollowUserACType = ReturnType<typeof unfollowUserAC>

export const unfollowUserAC = (userId: number) => {
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

type changeUserPageNumberType = ReturnType<typeof changeUserPageNumberAC>

export const changeUserPageNumberAC = (page: number) => {
    return {
        type: CHANGE_USER_PAGE_NUMBER,
        page
    } as const
}


type setTotalUsersCountType = ReturnType<typeof setTotalUsersCountAC>

export const setTotalUsersCountAC = (count: number) => {
    return {
        type: SET_USERS_COUNT,
        count
    } as const
}


type toggleIsFetchingType = ReturnType<typeof toggleIsFetchingAC>

export const toggleIsFetchingAC = (value: boolean) => {
    return {
        type: TOGGLE_IS_FETCHING,
        value
    } as const
}

type toggleIsFollowFetchingType = ReturnType<typeof toggleIsFollowFetchingAC>

export const toggleIsFollowFetchingAC = (value: boolean) => {
    return {
        type: TOGGLE_IS_FOLLOW_FETCHING,
        value
    } as const
}



type toggleFollowRequestInProcessType = ReturnType<typeof toggleFollowRequestInProcessAC>

export const toggleFollowRequestInProcessAC = (userId: number) => {
    return {
        type: TOGGLE_FOLLOW_REQUEST,
        userId
    } as const
}




