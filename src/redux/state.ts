const ADD_POST = 'ADD-POST'
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT'

export const addPostActionCreator = (post: string) => {
    return {
        type: ADD_POST,
        post: post
    } as const
}


export const updateNewPostTextActionCreator = (newText: string) => {
    return {
        type: UPDATE_POST_TEXT,
        newText: newText
    } as const
}

export type ActionTypes = ReturnType<typeof addPostActionCreator>  | ReturnType<typeof updateNewPostTextActionCreator>

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
    id: number
    name: string
}

export type DialogMessageDataType = {
    id: number
    text: string
}

export type DialogsPageType = {
    dialogs: Array<DialogDataType>
    messages: Array<DialogMessageDataType>
}

export type ProfilePageType = {
    posts: Array<MesPropType>
    newPostText: string
}


export type SidebarType = {
    friends: Array<FriendsType>
}

export type FriendsType = {
    id: number
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
    _updateNewPostText: (newText: string) => void
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
                {id: 1, name: "MyFriend1"},
                {id: 2, name: "MyFriend2"},
                {id: 3, name: "MyFriend3"},
                {id: 4, name: "MyFriend4"},
                {id: 5, name: "MyFriend5"},
                {id: 6, name: "MyFriend6"}
            ],
            messages: [
                {id: 1, text: "hello"},
                {id: 2, text: "wowow"},
                {id: 3, text: "fufufu"}
            ]
        },

        sidebar: {
            friends: [
                {id: 1, name: "Fedor"},
                {id: 2, name: "Sergey"},
                {id: 3, name: "Vasiliy"},
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
        this._state.profilePage.newPostText = ''
        this._renderEntireTree()
    },

    _updateNewPostText(newText: string) {
        this._state.profilePage.newPostText = newText
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
            default:
                throw new Error('Switch default error')
        }
    },

    subscribe(observer: () => void) {
        this._renderEntireTree = observer
    },
}


