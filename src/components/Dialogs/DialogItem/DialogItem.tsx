import React from "react";
import {NavLink} from "react-router-dom";
import css from './DialogItem.module.css'

type DialogItemProps = {
    id: string
    name: string
}
export const DialogItem: React.FC<DialogItemProps> = (props) => {
    return (
        <div className={css.DialogItemBox}>
            <NavLink to={"/dialogs/" + props.id} className={css.DialogItemLink} activeClassName={css.active}>{props.name}</NavLink>
        </div>
    )
}