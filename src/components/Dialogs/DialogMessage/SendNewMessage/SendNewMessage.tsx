import React, {ChangeEvent} from "react";
import css from "../../Dialogs.module.css";
import {Textarea} from "../../../Profile/MyPosts/SendNewPost/Textarea/Textarea";
import {Button} from "../../../Profile/MyPosts/SendNewPost/Button/Button";

type SendNewMessagePropsType = {
    messageText: string
    addMessage: () => void
    updateMessageText: (newSymbol: string) => void
}


export const SendNewMessage = (props: SendNewMessagePropsType) => {

    const addMessage = () => {
        props.addMessage()
    }

    const updateMessageText = (value: string) => {
        props.updateMessageText(value)
    }


    return (
        <div className={css.send_message_box}>

            <div>
                <Textarea
                    value={props.messageText}
                    onChange={updateMessageText}
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