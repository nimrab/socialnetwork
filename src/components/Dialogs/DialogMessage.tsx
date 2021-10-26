import React from "react";
import css from "./Dialogs.module.css";

type MessageProps = {
    text:string
}
export const Message:React.FC<MessageProps> = (props) => {
    return (

        <div className={css.message}>{props.text}</div>
    )
}