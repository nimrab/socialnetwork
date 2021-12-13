import {addMessageActionCreator, dialogReducer, updateMessageTextActionCreator} from "../dialog-reducer";
import {v1} from "uuid";
import {DialogsPageType} from "../store";

test('should add new message from newMessageText & clean newMessageText', () => {

    const state = {
        dialogs: [
            {id: v1(), name: "MyFriend1"},
            {id: v1(), name: "MyFriend2"},
        ],
        messages: [
            {id: v1(), text: "hello"},
            {id: v1(), text: "wowow"},

        ],
        newMessageText: 'new text'
    }
    const action=addMessageActionCreator()
    const newState = dialogReducer(state, action)


    expect(state.dialogs.length).toBe(2)
    expect(newState.messages.length).toBe(3)
    expect(newState.messages[2].text).toBe('new text')
    expect(newState.newMessageText).toEqual('')
})



test('should update newMessageText', () => {

    const state = {
        dialogs: [
            {id: v1(), name: "MyFriend1"},
            {id: v1(), name: "MyFriend2"},
        ],
        messages: [
            {id: v1(), text: "hello"},
            {id: v1(), text: "wowow"},

        ],
        newMessageText: ''
    }
    const action=updateMessageTextActionCreator('a')
    const newState = dialogReducer(state, action)


    expect(state.dialogs.length).toBe(2)
    expect(state.messages.length).toBe(2)
    expect(newState.newMessageText).toEqual('a')

})