import React from "react";
import css from './DialogMessage.module.css'

type MessageProps = {
    text:string
}
export const DialogMessage:React.FC<MessageProps> = (props) => {
    return (

        <div className={css.message}>{props.text}</div>
    )
}