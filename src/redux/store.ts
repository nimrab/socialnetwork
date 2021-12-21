import {v1} from "uuid";
import {ActionTypes, profileReducer} from "./profile-reducer";
import {dialogReducer} from "./dialog-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {rootReducer} from "./redux-store";


export type MesPropType = {
    mes: string
    likes: number
}

export type DialogDataType = {
    id: string
    name: string
}

export type DialogMessageDataType = {
    id: string
    text: string
}

export type DialogsPageType = {
    dialogs: Array<DialogDataType>
    messages: Array<DialogMessageDataType>
    newMessageText: string
}

export type ProfilePageType = {
    profile: UserProfileType | null
    posts: Array<MesPropType>
    newPostText: string
}

type UserProfileContactType = {
    facebook: string | null
    website: string | null
    vk: string | null
    twitter: string | null
    instagram: string | null
    youtube: string | null
    github: string | null
    mainLink: string | null
}

type UserProfilePhotosType = {
    small: string | null
    large: string | null
}
export type UserProfileType = {
    aboutMe: string
    contacts: UserProfileContactType
    lookingForAJob: boolean
    lookingForAJobDescription: string | null
    fullName: string
    userId: number
    photos: UserProfilePhotosType
}


export type SidebarType = {
    friends: Array<FriendsType>
}

export type FriendsType = {
    id: string
    name: string
}

export type UserPhotoType = {
    small: string
    large: string
}


export type UsersPageType = {
    users: Array<UsersType>
    pageSize: 7
    totalUsersCount: 0
    currentPage: number
    isFetching: boolean
}

export type UsersType = {
    id: string
    followed: boolean
    name: string
    status: string
    photos: UserPhotoType
}


export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}

export type StoreType = {
    _state: StateType
    getState: () => StateType
    _renderEntireTree: () => void
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionTypes) => void
}


export type ReduxStateType = ReturnType<typeof rootReducer>


export const store: StoreType = {
    _state: {
        profilePage: {
            profile: null,
            posts: [
                {mes: "hello bro", likes: 300},
                {mes: "hello bro1", likes: 330},
                {mes: "hello bro2", likes: 110}
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogs: [
                {id: v1(), name: "MyFriend1"},
                {id: v1(), name: "MyFriend2"},
                {id: v1(), name: "MyFriend3"},
                {id: v1(), name: "MyFriend4"},
                {id: v1(), name: "MyFriend5"},
                {id: v1(), name: "MyFriend6"}
            ],
            messages: [
                {id: v1(), text: "hello"},
                {id: v1(), text: "wowow"},
                {id: v1(), text: "fufufu"}
            ],
            newMessageText: ''
        },
        sidebar: {
            friends: [
                {id: v1(), name: "Fedor"},
                {id: v1(), name: "Sergey"},
                {id: v1(), name: "Vasiliy"},
            ]
        }
    },

    getState() {
        return this._state
    },

    _renderEntireTree() {
        //waiting subscriber
    },


    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        this._renderEntireTree()
    },

    subscribe(observer: () => void) {
        this._renderEntireTree = observer
    },
}


