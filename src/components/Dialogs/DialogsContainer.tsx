import React from "react";
import {Dialogs} from "./Dialogs";
import {AppPropsType} from "../../App";
import {addMessageActionCreator, updateMessageTextActionCreator} from "../../redux/dialog-reducer";


export const DialogsContainer = (props: AppPropsType) => {

    const addMessage = () => {
        props.store.dispatch(addMessageActionCreator())
    }

    const updateMessageText = (newSymbol: string) => {
        props.store.dispatch(updateMessageTextActionCreator(newSymbol))
    }






    const state = props.store.getState().dialogsPage

    return (
        <Dialogs
            dialogPage={state}
            addMessage={addMessage}
            updateMessageText={updateMessageText}
        />
    )

}