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

let state = {
        profilePage: {
            posts: [
                {mes: "hello bro", likes: 300},
                {mes: "hello bro1", likes: 330},
                {mes: "hello bro2", likes: 110}
            ]
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

        sidebar:{
            friends: [
                {id: 1, name: "Fedor"},
                {id: 2, name: "Sergey"},
                {id: 3, name: "Vasiliy"},
            ]
        }
    }


export default state;