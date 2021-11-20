import {ActionTypes, ProfilePageType} from "./store";

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


export const profileReducer = (state: ProfilePageType, action: ActionTypes): ProfilePageType => {

    switch (action.type) {

        case ADD_POST:
            const newPost = {
                mes: action.post,
                likes: 0
            }
            state.posts.push(newPost)
            state.newPostText = ''
            return state

        case UPDATE_POST_TEXT:
            state.newPostText = action.newText
            return state

        default:
            return state
    }
}