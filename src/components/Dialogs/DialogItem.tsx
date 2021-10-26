import React from "react";
import css from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

type DialogItemProps = {
    id: number
    name: string
}
export const DialogItem: React.FC<DialogItemProps> = (props) => {
    return (
        <div className={css.DialogItemBox}>
            <NavLink to={"/dialogs/" + props.id} className={css.DialogItemLink} activeClassName={css.active}>{props.name}</NavLink>
        </div>
    )
}