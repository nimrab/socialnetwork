import {ActionTypes, DialogsPageType} from "./store";
import {v1} from "uuid";

const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT'

export const addMessageActionCreator = (message: string) => {
    return {
        type: ADD_MESSAGE,
        message: message
    } as const
}


export const updateNewMessageTextActionCreator = (newText: string) => {
    return {
        type: UPDATE_MESSAGE_TEXT,
        newText: newText
    } as const
}



export const dialogReducer = (state: DialogsPageType, action: ActionTypes): DialogsPageType => {

    switch (action.type) {

        case ADD_MESSAGE:
            const newMessage = {
                id: v1(),
                text: action.message
            }
            state.messages.push(newMessage)
            state.newMessageText = ''
            return state

        case UPDATE_MESSAGE_TEXT:
            state.newMessageText = action.newText
            return state

        default:
            return state
    }
}