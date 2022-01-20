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

