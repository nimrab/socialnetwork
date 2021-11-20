import React from "react";
import css from "../../Dialogs.module.css";
import {Textarea} from "../../../Profile/MyPosts/SendNewPost/Textarea/Textarea";
import {Button} from "../../../Profile/MyPosts/SendNewPost/Button/Button";
import {ActionTypes, addMessageActionCreator, updateNewMessageTextActionCreator} from "../../../../redux/state";


type SendNewMessagePropsType = {
    messageText: string
    dispatch: (action: ActionTypes) => void
}


export const SendNewMessage = (props: SendNewMessagePropsType) => {


    const ref = React.createRef<HTMLTextAreaElement>()


    const addMessage = () => {
        if (ref.current) {
            props.dispatch(addMessageActionCreator(props.messageText))
        }
    }

    const updateNewMessageText = (newText: string) => {
        props.dispatch(updateNewMessageTextActionCreator(newText))
    }

    const zeroText = () => {
        props.dispatch(updateNewMessageTextActionCreator(''))
    }
    const defaultText = () => {
        setTimeout(() => props.dispatch(updateNewMessageTextActionCreator('Input your message')), 100)
    }


    return (
        <div className={css.send_message_box}>

            <div>
                <Textarea
                    ref={ref}
                    value={props.messageText}
                    onChange={updateNewMessageText}
                    onClick={zeroText}
                    onBlur={defaultText}
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