import React from "react";
import css from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./DialogMessage/DialogMessage";
import {dialogDataType, dialogMessageDataType} from "../../index";


type DialogsProps = {
    dialogData: Array<dialogDataType>,
    dialogMessageData: Array<dialogMessageDataType>
}

export const Dialogs = (props: DialogsProps) => {


    const dialogDataMap: JSX.Element[] = props.dialogData.map(el => {
        return <DialogItem id={el.id} name={el.name}/>
    })

    const dialogDataMessageMap: JSX.Element[] = props.dialogMessageData.map(el => {
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




