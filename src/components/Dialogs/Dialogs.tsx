import React from "react";
import css from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {DialogMessage} from "./DialogMessage/Messages/DialogMessage";
import {DialogsPageType} from "../../redux/store";
import {SendNewMessage} from "./DialogMessage/SendNewMessage/SendNewMessage";


export type DialogsProps = {
    dialogPage:DialogsPageType
    addMessage: () => void
    updateMessageText: (newSymbol: string) => void

}

export const Dialogs = (props: DialogsProps) => {


    const dialogDataMap: JSX.Element[] = props.dialogPage.dialogs.map(el => {
        return <DialogItem key={el.id} id={el.id} name={el.name}/>
    })

    const dialogDataMessageMap: JSX.Element[] = props.dialogPage.messages.map(el => {
        return <DialogMessage key={el.id} text={el.text}/>
    })

    return (
        <section className={css.dialogs}>

            <div className={css.dialogs_items_main}>
                {dialogDataMap}
            </div>

            <section className={css.dialogs_message_main}>

                <div className={css.messages}> {dialogDataMessageMap} </div>

                <SendNewMessage
                messageText={props.dialogPage.newMessageText}
                addMessage={props.addMessage}
                updateMessageText={props.updateMessageText}
                />


            </section>
        </section>
    )
}




