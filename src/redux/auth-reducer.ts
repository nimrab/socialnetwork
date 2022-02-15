import {Dispatch} from "redux";
import {authMe, sendLoginForm} from "../API/API";
import {toggleIsFetchingAC} from "./user-reducer";
import {FormValues} from "../components/Header/Login/Login";

const SET_AUTH_DATA = 'SET-AUTH-DATA'

export type initialStateType = {
    id: number | null
    email: string | null
    login: string | null
    messages: Array<string>
    isAuth: boolean
}

const initialState = {
    id: null,
    email: null,
    login: null,
    messages: [],
    isAuth: false
}

type ActionType = SetAuthType

export const authReducer = (state: initialStateType = initialState, action: ActionType): initialStateType => {
    switch (action.type) {

        case 'SET-AUTH-DATA':
            return {...state, ...action.data, isAuth: true}

        default:
            return state

    }
}


type SetAuthType = ReturnType<typeof setAuth>

export const setAuth = (id: number, email: string, login: string, messages: Array<string>) => {
    return {
        type: SET_AUTH_DATA,
        data: {
            id,
            email,
            login,
            messages
        }
    } as const

}

//...................................................................
//Thunk Creators

export const setAuthTC = () => (dispatch: Dispatch) => {
    dispatch(toggleIsFetchingAC(true))
    authMe()
        .then(res => {
            if (res.data.resultCode === 0) {
                const {id, email, login, messages} = res.data.data
                dispatch(setAuth(id, email, login, messages))
                dispatch(toggleIsFetchingAC(false))
            }
        })
}

export const loginFormTC = (formData: FormValues) => (dispatch: Dispatch) => {
    dispatch(toggleIsFetchingAC(true))
    sendLoginForm(formData)
        .then(res => {
            if (res.data.resultCode === 0) {
                authMe()
                    .then(res => {
                        if (res.data.resultCode === 0) {
                            const {id, email, login, messages} = res.data.data
                            dispatch(setAuth(id, email, login, messages))
                            dispatch(toggleIsFetchingAC(false))
                        }
                    })
            }
        })
}