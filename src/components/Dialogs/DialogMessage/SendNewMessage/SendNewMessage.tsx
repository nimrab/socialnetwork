import React from "react";
import css from "../../Dialogs.module.css";
import {Textarea} from "../../../Profile/MyPosts/SendNewPost/Textarea/Textarea";
import {Button} from "../../../Profile/MyPosts/SendNewPost/Button/Button";
import {ActionTypes} from "../../../../redux/store";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../../../redux/dialog-reducer";

type SendNewMessagePropsType = {
    messageText: string
    dispatch: (action: ActionTypes) => void
}


export const SendNewMessage = (props: SendNewMessagePropsType) => {


    const addMessage = () => {
        props.dispatch(addMessageActionCreator(props.messageText))
    }

    const updateNewMessageText = (newText: string) => {
        props.dispatch(updateNewMessageTextActionCreator(newText))
    }


    return (
        <div className={css.send_message_box}>

            <div>
                <Textarea
                    value={props.messageText}
                    onChange={updateNewMessageText}
                    placeholder='Input your message'
                />
            </div>
            <div>
                <Button
                    callback={addMessage}
                    name="Send message"
                />
            </div>

        </div>
    )


}