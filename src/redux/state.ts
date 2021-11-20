import {v1} from "uuid";

const ADD_POST = 'ADD-POST'
const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT'
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT'

export const addPostActionCreator = (post: string) => {
    return {
        type: ADD_POST,
        post: post
    } as const
}

export const addMessageActionCreator = (message: string) => {
    return {
        type: ADD_MESSAGE,
        message: message
    } as const
}

export const updateNewPostTextActionCreator = (newText: string) => {
    return {
        type: UPDATE_POST_TEXT,
        newText: newText
    } as const
}

export const updateNewMessageTextActionCreator = (newText: string) => {
    return {
        type: UPDATE_MESSAGE_TEXT,
        newText: newText
    } as const
}

export type ActionTypes =
    (
        ReturnType<typeof addPostActionCreator> |
        ReturnType<typeof updateNewPostTextActionCreator> |
        ReturnType<typeof addMessageActionCreator> |
        ReturnType<typeof updateNewMessageTextActionCreator>

        )


// export type addPostActionType = {
//     type: 'ADD-POST'
//     post: string
// }

// export type updateNewPostTextActionType = {
//     type: 'UPDATE-POST-TEXT'
//     newText: string
// }


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
    posts: Array<MesPropType>
    newPostText: string
}


export type SidebarType = {
    friends: Array<FriendsType>
}

export type FriendsType = {
    id: string
    name: string
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
    _addPost: (post: string) => void
    _addMessage: (message: string) => void
    _updateNewPostText: (newText: string) => void
    _updateMessageText: (newText: string) => void
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionTypes) => void
}


export const store: StoreType = {

    _state: {
        profilePage: {
            posts: [
                {mes: "hello bro", likes: 300},
                {mes: "hello bro1", likes: 330},
                {mes: "hello bro2", likes: 110}
            ],
            newPostText: 'Input your message'
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
            newMessageText: 'Input your message'
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

    _addPost(post: string) {
        const newPost = {
            mes: post,
            likes: 0
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = 'Input your post'
        this._renderEntireTree()
    },

    _addMessage(message: string) {
        const newMessage = {
            id: v1(),
            text: message
        }
        this._state.dialogsPage.messages.push(newMessage)
        this._state.dialogsPage.newMessageText = 'Input your message'
        this._renderEntireTree()
    },

    _updateNewPostText(newText: string) {
        this._state.profilePage.newPostText = newText
        this._renderEntireTree()
    },

    _updateMessageText(newText: string) {
        this._state.dialogsPage.newMessageText = newText
        this._renderEntireTree()
    },

    dispatch(action) {
        switch (action.type) {
            case 'ADD-POST':
                this._addPost(action.post)
                break
            case 'UPDATE-POST-TEXT':
                this._updateNewPostText(action.newText)
                break
            case 'ADD-MESSAGE':
                this._addMessage(action.message)
                break
            case 'UPDATE-MESSAGE-TEXT':
                this._updateMessageText(action.newText)
                break
            default:
                throw new Error('Switch default error')
        }
    },

    subscribe(observer: () => void) {
        this._renderEntireTree = observer
    },
}


