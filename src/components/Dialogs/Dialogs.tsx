import React from "react";
import css from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./DialogMessage/DialogMessage";
import {dialogsPageType} from "../../redux/state";



export type DialogsProps = {
    state:dialogsPageType
}

export const Dialogs = (props: DialogsProps) => {


    const dialogDataMap: JSX.Element[] = props.state.dialogs.map(el => {
        return <DialogItem id={el.id} name={el.name}/>
    })

    const dialogDataMessageMap: JSX.Element[] = props.state.messages.map(el => {
        return <Message text={el.text}/>
    })

    return (
        <section className={css.dialogs}>
            <div className={css.dialogs_items}>
                {dialogDataMap}
            </div>
            <div className={css.dialogs_messages}>
                {dialogDataMessageMap}
            </div>
        </section>
    )
}




