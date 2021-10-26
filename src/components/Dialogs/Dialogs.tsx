import React from "react";
import css from './Dialogs.module.css'
import {DialogItem} from "./DialogItem";
import {Message} from "./DialogMessage";


export const Dialogs = () => {

    type dialogDataType = {
        id: number
        name: string
    }

    const dialogData: Array<dialogDataType> = [
        {id: 1, name: "MyFriend1"},
        {id: 2, name: "MyFriend2"},
        {id: 3, name: "MyFriend3"},
        {id: 4, name: "MyFriend4"},
        {id: 5, name: "MyFriend5"},
        {id: 6, name: "MyFriend6"},
        {id: 6, name: "MyFriend6"},
    ]

    type dialogMessageDataType = {
        id: number
        text: string
    }

    const dialogMessageData: Array<dialogMessageDataType> = [
        {id: 1, text: "hello"},
        {id: 2, text: "wowow"},
        {id: 3, text: "fufufu"},
    ]

    const dialogDataMap: JSX.Element[] = dialogData.map(el => {
        return <DialogItem id={el.id} name={el.name}/>
    })

    const dialogDataMessageMap: JSX.Element[] = dialogMessageData.map(el => {
        return  <Message text={el.text}/>
    })

    return (
        <section className={css.dialogs}>
            <div className={css.dialogs_items}>
                { dialogDataMap }
            </div>
            <div className={css.dialogs_messages}>
                { dialogDataMessageMap }
            </div>
        </section>
    )
}




