import React from "react";
import {Dialogs} from "./Dialogs";
import {addMessageActionCreator, updateMessageTextActionCreator} from "../../redux/dialog-reducer";
import {connect} from "react-redux";
import {DialogsPageType, ReduxStateType} from "../../redux/store";
import {Dispatch} from "redux";


// export const DialogsContainer = (props: AppPropsType) => {
//
//     const state = props.store.getState().dialogsPage
//
//     const addMessage = () => {
//         props.store.dispatch(addMessageActionCreator())
//     }
//
//     const updateMessageText = (newSymbol: string) => {
//         props.store.dispatch(updateMessageTextActionCreator(newSymbol))
//     }
//
//
//     return (
//         <Dialogs
//             dialogPage={state}
//             addMessage={addMessage}
//             updateMessageText={updateMessageText}
//         />
//     )
//
// }


export type DialogsPropsType = mapStateToPropsType & mapDispatchToPropsType


type mapStateToPropsType = {
    dialogsPage: DialogsPageType
}

type mapDispatchToPropsType = {
    addMessage: () => void
    updateMessageText: (newSymbol: string) => void
}

const mapStateToProps = (state: ReduxStateType): mapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        addMessage: () => {
            dispatch(addMessageActionCreator())
        },
        updateMessageText: (newSymbol: string) => {
            dispatch(updateMessageTextActionCreator(newSymbol))
        }
    }
}


export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
//Dialogs это наша компонента Dialogs