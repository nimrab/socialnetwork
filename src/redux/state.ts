export type MesPropType = {
    mes: string
    likes: number
}

export type dialogDataType = {
    id: number
    name: string
}

export type dialogMessageDataType = {
    id: number
    text: string
}

export type dialogsPageType = {
    dialogs: Array<dialogDataType>
    messages: Array<dialogMessageDataType>
}

export type profilePageType = {
    posts: Array<MesPropType>
    newPostText: string
}


export type sidebarType = {
    friends: Array<friendsType>
}

export type friendsType = {
    id: number
    name: string
}


export type stateType = {
    profilePage: profilePageType
    dialogsPage: dialogsPageType
    sidebar: sidebarType
}

export type storeType = {
    _state: stateType
    getState: () => stateType
    _renderEntireTree: () => void
    addPost: (post:string) => void
    updateNewPostText: (newText: string) => void
    subscribe: (observer: () => void) => void
}

export const store: storeType = {

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

    addPost(post:string) {
        const newPost = {
            mes: post,
            likes: 0
        }

        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        this._renderEntireTree()
    },

    updateNewPostText(newText: string) {
        this._state.profilePage.newPostText = newText
        this._renderEntireTree()
    },

    subscribe(observer: () => void) {
        this._renderEntireTree = observer
    },
}


