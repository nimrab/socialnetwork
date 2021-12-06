import {ActionTypes, ProfilePageType} from "./store";

const ADD_POST = 'ADD-POST'
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT'

export const addPostActionCreator = () => {
    return {
        type: ADD_POST,
    } as const
}


export const updateNewPostTextActionCreator = (newText: string) => {
    return {
        type: UPDATE_POST_TEXT,
        newText: newText
    } as const
}

const initialState: ProfilePageType = {
    posts: [
        {mes: "hello bro", likes: 300},
        {mes: "hello bro1", likes: 330},
        {mes: "hello bro2", likes: 110}
    ],
    newPostText: ''
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionTypes): ProfilePageType => {

    switch (action.type) {

        case ADD_POST:
            const newPost = {
                mes: state.newPostText,
                likes: 0
            }
            // state.posts = [...state.posts, newPost]
            // state.newPostText = ''
            return {...state, posts: [...state.posts, newPost], newPostText: ''}

        case UPDATE_POST_TEXT:
            //state.newPostText = action.newText
            return {...state, newPostText: action.newText}

        default:
            return state
    }
}