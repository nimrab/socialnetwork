import React from "react";
import css from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./DialogMessage/Messages/DialogMessage";
import {ActionTypes, DialogsPageType} from "../../redux/store";
import {SendNewMessage} from "./DialogMessage/SendNewMessage/SendNewMessage";



export type DialogsProps = {
    state:DialogsPageType
    dispatch:(action:ActionTypes) => void
}

export const Dialogs = (props: DialogsProps) => {


    const dialogDataMap: JSX.Element[] = props.state.dialogs.map(el => {
        return <DialogItem key={el.id} id={el.id} name={el.name}/>
    })

    const dialogDataMessageMap: JSX.Element[] = props.state.messages.map(el => {
        return <Message key={el.id} text={el.text}/>
    })

    return (
        <section className={css.dialogs}>

            <div className={css.dialogs_items_main}>
                {dialogDataMap}
            </div>

            <section className={css.dialogs_message_main}>

                <div className={css.messages}> {dialogDataMessageMap} </div>

                <SendNewMessage
                messageText={props.state.newMessageText}
                dispatch={props.dispatch}
                />


            </section>
        </section>
    )
}




