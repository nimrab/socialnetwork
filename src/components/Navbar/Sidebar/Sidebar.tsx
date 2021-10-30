import React from "react";
import css from './Sidebar.module.css'
import {Friends} from "./Friends/Friends";
import {friendsType} from "../../../redux/state";


export type SidebarProps = {
    friends: Array<friendsType>
}

export const Sidebar = (props: SidebarProps) => {

    return (

        <div className={css.sidebar}>
            <Friends friends={props.friends}/>
        </div>
    )

}