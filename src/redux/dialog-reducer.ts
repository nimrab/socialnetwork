import {ActionTypes, DialogsPageType} from "./store";
import {v1} from "uuid";

const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT'

export const addMessageActionCreator = () => {
    return {
        type: ADD_MESSAGE,
    } as const
}


export const updateMessageTextActionCreator = (newText: string) => {
    return {
        type: UPDATE_MESSAGE_TEXT,
        newText: newText
    } as const
}

const initialState = {
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
}

export const dialogReducer = (state: DialogsPageType=initialState, action: ActionTypes): DialogsPageType => {
    switch (action.type) {

        case ADD_MESSAGE:
            const newMessage = {
                id: v1(),
                text: state.newMessageText
            }
            state.messages = [...state.messages, newMessage]
            state.newMessageText = ''
            return state

        case UPDATE_MESSAGE_TEXT:
            state.newMessageText = action.newText
            return state

        default:
            return state
    }
}