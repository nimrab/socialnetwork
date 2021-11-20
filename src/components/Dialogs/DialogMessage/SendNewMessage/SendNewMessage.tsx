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




    return (
        <div className={css.send_message_box}>

            <div>
                <Textarea
                    ref={ref}
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