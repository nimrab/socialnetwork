import React from "react";
import css from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

export const Dialogs = () => {
    return (
        <section className={css.dialogs}>

            <div className={css.dialogs_items}>
                <DialogItem id={1} name="MyFriend1"/>
                <DialogItem id={2} name="MyFriend2"/>
                <DialogItem id={3} name="MyFriend3"/>
                <DialogItem id={4} name="MyFriend4"/>
                <DialogItem id={5} name="MyFriend5"/>
            </div>


            <div className={css.dialogs_messages}>
                <Message text="Hello bro"/>
                <Message text="Hello buddy"/>
                <Message text="Hello man"/>
            </div>


        </section>
    )
}


type DialogItemProps = {
    id: number
    name: string
}
const DialogItem: React.FC<DialogItemProps> = (props) => {
    return (
        <div className={css.DialogItemBox}>
            <NavLink to={"/dialogs/" + props.id} className={css.DialogItemLink} activeClassName={css.active}>{props.name}</NavLink>
        </div>
    )
}


type MessageProps = {
    text:string
}
const Message:React.FC<MessageProps> = (props) => {
    return (

        <div className={css.message}>{props.text}</div>
    )
}